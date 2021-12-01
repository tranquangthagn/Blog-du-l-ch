using Blog_du_lịch.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Blog_du_lịch.Controllers
{
    public class TravelController : Controller
    {
        private readonly Service _service;
        public TravelController(Service service)
        {
            _service = service;
        }
        public IActionResult Index()
        {
            return View(_service.Travels);

        }
        public IActionResult Details(int id)
        {
            var s = _service.Get(id);
            if (s == null) 
            {
                return NotFound();
            }
            
            else
            {
                return View(s);
            }
        }    
    }
}
