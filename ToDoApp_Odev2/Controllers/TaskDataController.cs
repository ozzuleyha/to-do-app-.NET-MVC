using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ToDoApp_Odev2.Models;

namespace ToDoApp_Odev2.Controllers
{
    public class TaskDataController : Controller
    {
        // GET: Task
        public ActionResult GetTaskData()
        {
            List<Gorev> gorev = new List<Gorev>
        {
            new Gorev
            {
                GorevId = 1,
                GorevAciklama = "Proje yap"
            },
            new Gorev
            {
                GorevId = 2,
                GorevAciklama= "Spora git"
            },
            new Gorev
            {
                GorevId = 3,
                GorevAciklama = "Çiçekleri sula"
            }
        };

            return Json(new { success = true, responseText = gorev }, JsonRequestBehavior.AllowGet);
        }
    }
    }
