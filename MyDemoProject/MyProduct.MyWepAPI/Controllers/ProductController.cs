using MyProduct.MyWepAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Http.Cors;
using System.Web.Http;

namespace MyProduct.MyWepAPI.Controllers
{
    [EnableCors(origins: "http://localhost:55664/", headers: "*", methods: "*")]
    public class ProductController : ApiController
    {
        //55664 es el puerto de WebApp
        //61793 es el peurto de WebApi
        private ProductsWebEntities db = new ProductsWebEntities();
        // GET: Product
        
        public IEnumerable<Object> Get()
        {

            var catalog = (from p in db.Products.AsEnumerable()
                           join i in db.ProductImages.AsEnumerable()
                           on p.Id equals i.ProductId
                           select new
                           {
                               p.Id,
                               p.Name,
                               p.DescriptionP,
                               i.ImageUrl,
                               p.Price,
                               p.Model
                           }).ToList();

            return catalog;
        }
    }
}