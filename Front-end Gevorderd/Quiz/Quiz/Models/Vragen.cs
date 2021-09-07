using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Quiz.Models
{
    public class Vragen
    {
        [Key]
        public int ID { get; set; }
        public int Nummer { get; set; }
        public string Vraag { get; set; }
        public string Keuze1 { get; set; }
        public string Keuze2 { get; set; }
        public string Keuze3 { get; set; }
        public string Keuze4 { get; set; }
        public int Antwoord { get; set; }
    }
}
