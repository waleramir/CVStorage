using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CVStorage.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace CVStorage.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AppUserController : ControllerBase
    {
        private UserManager<AppUser> userManager;
        private SignInManager<AppUser> signInManager;
        public AppUserController(UserManager<AppUser> userManager, SignInManager<AppUser> signInManager)
        {
            this.userManager = userManager;
            this.signInManager = signInManager;
        }

        [HttpPost]
        [Route("register")]
        public async Task<object> AddAppUser(AppUserModel model)
        {
            var appUser = new AppUser()
            {
                UserName = model.UserName,
                Email = model.Email,
                FullName = model.Fullname
            };
            try
            {
                var res = await userManager.CreateAsync(appUser, model.Password);
                return Ok(res);
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }
    }

}