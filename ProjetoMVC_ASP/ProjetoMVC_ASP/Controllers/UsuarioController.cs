using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ProjetoMVC_ASP.Models;


namespace ProjetoMVC_ASP.Controllers
{
    public class UsuarioController : Controller
    {
        // GET: Usuario
        public ActionResult Index()
        {

            List<usuario> usuarioList = new List<usuario>();

            using (projeto_ccharpEntities2 dbModel = new projeto_ccharpEntities2())
            {

                usuarioList = dbModel.usuarios.ToList<usuario>();

            }

            ViewBag.usuarioList = usuarioList;

            return View();
        }

        [HttpPost]
        public ActionResult Create(usuario usuarioDb)
        {

            using (projeto_ccharpEntities2 dbModel = new projeto_ccharpEntities2())
            {

                dbModel.usuarios.Add(usuarioDb);
                dbModel.SaveChanges();

            }

            return RedirectToAction("Index");

        }

        public ActionResult Edit(int id)
        {

            usuario usuarioDb = new usuario();

            using (projeto_ccharpEntities2 dbModel = new projeto_ccharpEntities2())
            {

                usuarioDb = dbModel.usuarios.Where(x => x.id == id).FirstOrDefault();

            }

            ViewBag.usuario = usuarioDb;

            return View();

        }

        [HttpPost]
        public ActionResult Update(usuario usuarioDb)
        {

            using (projeto_ccharpEntities2 dbModel = new projeto_ccharpEntities2())
            {

                dbModel.Entry(usuarioDb).State = System.Data.EntityState.Modified;
                dbModel.SaveChanges();

            }

            return RedirectToAction("Index");

        }

        public ActionResult Delete(int id)
        {

            using (projeto_ccharpEntities2 dbModel = new projeto_ccharpEntities2())
            {

                usuario usuarioDb = dbModel.usuarios.Where(x => x.id == id).FirstOrDefault();
                dbModel.usuarios.Remove(usuarioDb);
                dbModel.SaveChanges();

            }

            return RedirectToAction("Index");

        }
    }
}