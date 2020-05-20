using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CVStorage.Models
{
    public class AppSettings
    {
        public string JWTsecret { get; set; }
        public string ClientURL { get; set; }
    }
}
