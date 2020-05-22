using CVStorage.Controllers;
using CVStorage.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Moq;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Xunit;
using Microsoft.IdentityModel.Tokens;

namespace CVStorage.Tests
{
    public class UserProfileControllerTests
    {
        private List<AppUser> _users = new List<AppUser>
        {
            new AppUser{Id=1.ToString(),FullName="User1",Email="user1@bv.com"},
            new AppUser{Id=2.ToString(),FullName="User2",Email="user2@bv.com"},
        };

        public static Mock<UserManager<TUser>> MockUserManager<TUser>(List<TUser> ls) where TUser : class
        {
            var store = new Mock<IUserStore<TUser>>();
            var mgr = new Mock<UserManager<TUser>>(store.Object, null, null, null, null, null, null, null, null);
            mgr.Object.UserValidators.Add(new UserValidator<TUser>());
            mgr.Object.PasswordValidators.Add(new PasswordValidator<TUser>());

            mgr.Setup(x => x.DeleteAsync(It.IsAny<TUser>())).ReturnsAsync(IdentityResult.Success);
            mgr.Setup(x => x.CreateAsync(It.IsAny<TUser>(), It.IsAny<string>())).ReturnsAsync(IdentityResult.Success).Callback<TUser, string>((x, y) => ls.Add(x));
            mgr.Setup(x => x.UpdateAsync(It.IsAny<TUser>())).ReturnsAsync(IdentityResult.Success);

            return mgr;
        }

        [Fact]
        public async Task SuccessProfile()
        {
            // Arrange
            var mock = MockUserManager(_users);
            UserProfileController controller = new UserProfileController(mock.Object);

            object res = null;

            // Act
            try
            {  res = await controller.GetUserProfile(); }
            catch(Exception ex)
            {
                res = ex;
            }
            

            // Assert

            Assert.IsType<NullReferenceException>(res);

        }

        [Fact]
        public async Task withoutJWTProfile()
        {
            // Arrange
            var model = new AppUserModel { };
            var mock = MockUserManager(_users);
            var someOptions = Options.Create(new AppSettings { ClientURL = "", JWTsecret = "11212122112121223" });
            AppUserController controller = new AppUserController(mock.Object, someOptions);

            // Act
            var result = await controller.AddAppUser(model);

            // Assert

            Assert.IsType<OkObjectResult>(result);

        }

        [Fact]
        public async Task WithJWTProfile()
        {
            // Arrange
            var model = new LoginModel { Password = "", UserName = "User1" };
            var mock = MockUserManager(_users);
            var someOptions = Options.Create(new AppSettings { ClientURL = "", JWTsecret = "11212122112121223" });
            AppUserController controller = new AppUserController(mock.Object, someOptions);

            // Act
            var result = await controller.Login(model);

            // Assert

            Assert.IsType<BadRequestObjectResult>(result);

        }

        [Fact]
        public async Task EmptyProfile()
        {
            // Arrange
            var model = new LoginModel { };
            var mock = MockUserManager(_users);
            var someOptions = Options.Create(new AppSettings { ClientURL = "", JWTsecret = "11212122112121223" });
            AppUserController controller = new AppUserController(mock.Object, someOptions);

            // Act
            var result = await controller.Login(model);

            // Assert

            Assert.IsType<BadRequestObjectResult>(result);

        }
    }
}
