using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace ProjetoMVC_ASP
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                "cadastrar_usuario",
                "usuario/{id}/{nome}/editar",
                new { controller = "Home", action = "About", id = 0, nome = "Anonimo" }
            );

            routes.MapRoute(
               "home",
               "home",
               new { controller = "Home", action = "Index" }
            );

            routes.MapRoute(
                "registro",
                "registro",
                new {controller = "Home", action = "Register" }
            );

            routes.MapRoute(
               "sobre",
               "sobre",
               new { controller = "Home", action = "About" }
            );

            routes.MapRoute(
               "contato",
               "contato",
               new { controller = "Home", action = "Contact" }
            );

            routes.MapRoute(
               "login",
               "login",
               new { controller = "Home", action = "Login" }
            );

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}
