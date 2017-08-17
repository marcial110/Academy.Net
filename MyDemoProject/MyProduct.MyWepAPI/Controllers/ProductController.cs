using MyProduct.MyWepAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Http.Cors;

namespace MyProduct.MyWepAPI.Controllers
{
    public class ProductController : Controller
    {
        private ProductsWebEntities db = new ProductsWebEntities();
        // GET: Product
        [EnableCors(origins: "http://localhost:55894/", headers: "*", methods: "*")]
        public IEnumerable<Product> Get()
        {
            var products = db.Products.AsEnumerable();
            return products.ToList();
        }
    }
}