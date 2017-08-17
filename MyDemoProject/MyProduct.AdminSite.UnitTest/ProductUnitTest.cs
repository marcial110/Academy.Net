using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MyProduct.AdminSite;
using MyProduct.AdminSite.Controllers;
using MyProduct.AdminSite.Models;
using System.Web.Mvc;

namespace MyProduct.AdminSite.UnitTest
{
    [TestClass]
    public class ProductUnitTest
    {
        [TestMethod]
        public void IndexProducts()
        {
            ProductsController controller = new ProductsController();
            ViewResult result = controller.Index() as ViewResult;
            Assert.IsNotNull(result);
        }

        [TestMethod]
        public void IndexProductsCreate()
        {
            ProductsController controller = new ProductsController();
            ViewResult result = controller.Index() as ViewResult;
            Assert.IsNotNull(result);
        }


        [TestMethod]
        public void IndexCategories()
        {
            CategoriesController controller = new CategoriesController();
            ViewResult result = controller.Index() as ViewResult;
            Assert.IsNotNull(result);
        }

        [TestMethod]
        public void IndexProductsImages()
        {
            ProductImagesController controller = new ProductImagesController();
            ViewResult result = controller.Index() as ViewResult;
            Assert.IsNotNull(result);
        }
    }
}
