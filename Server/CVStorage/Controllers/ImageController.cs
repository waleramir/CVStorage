using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CVStorage.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ImageController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            var images = Directory.GetFiles("D:\\CVStorage\\CVStorage\\Server\\CVStorage\\Images");
            var image = System.IO.File.OpenRead("D:\\CVStorage\\CVStorage\\Server\\CVStorage\\Imagesrandom_image.jpeg");
            return File(image, "image/jpeg");
            
        }
    }
}