using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ToDoApp_Odev2.Models
{
    public class Gorev
    {
        [Display(Name = "Görev No")]
        public byte GorevId { get; set; }
        [Display(Name = "Görev Açıklama")]
        public string GorevAciklama { get; set; }
    }
}