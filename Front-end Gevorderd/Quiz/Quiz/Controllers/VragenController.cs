using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Quiz.Models;

namespace Quiz.Controllers
{
    public class VragenController : Controller
    {
        private readonly QuizContext _context;

        public VragenController(QuizContext context)
        {
            _context = context;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Vragenlijst()
        {
            var db = _context;

            IEnumerable<Vragen> vragenlijst =
                from v in db.Vragen
                select new Vragen
                {
                    Nummer = v.Nummer,
                    Vraag = v.Vraag,
                    Keuze1 = v.Keuze1,
                    Keuze2 = v.Keuze2,
                    Keuze3 = v.Keuze3,
                    Keuze4 = v.Keuze4
                };
            return Json(vragenlijst.ToArray());
        }

        public int UpdateScore(int keuze, int positie)
        {
            int score = 0;
            var db = _context;

            var query =
                from v in db.Vragen
                where v.Nummer == positie
                where v.Antwoord == keuze
                select v;

            if (query.Count() > 0)
            {
                score++;
            }
            return score;
        }

        public IActionResult LijstCorrect(int vraag)
        {
            var db = _context;
            var jsonOutput = new List<Vragen>();

            var vragenlijst =
                from v in db.Vragen
                where v.Nummer == vraag
                select v.Antwoord;

            int antwoord = vragenlijst.FirstOrDefault();

            switch (antwoord)
            {
                case 1:
                    IEnumerable<Vragen> output =
                        from v in db.Vragen
                        where v.Nummer == vraag
                        select new Vragen
                        {
                            Vraag = v.Vraag,
                            Keuze1 = v.Keuze1
                        };
                    jsonOutput = output.ToList();
                    break;
                case 2:
                    output =
                        from v in db.Vragen
                        where v.Nummer == vraag
                        select new Vragen
                        {
                            Vraag = v.Vraag,
                            Keuze1 = v.Keuze2
                        };
                    jsonOutput = output.ToList();
                    break;
                case 3:
                    output =
                        from v in db.Vragen
                        where v.Nummer == vraag
                        select new Vragen
                        {
                            Vraag = v.Vraag,
                            Keuze1 = v.Keuze3
                        };
                    jsonOutput = output.ToList();
                    break;
                case 4:
                    output =
                        from v in db.Vragen
                        where v.Nummer == vraag
                        select new Vragen
                        {
                            Vraag = v.Vraag,
                            Keuze1 = v.Keuze4
                        };
                    jsonOutput = output.ToList();
                    break;
            }
            return Json(jsonOutput);
        }
    }
}