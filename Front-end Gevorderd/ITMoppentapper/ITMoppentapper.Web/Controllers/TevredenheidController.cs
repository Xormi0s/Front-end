using ITMoppentapper.Web.Models;
using Microsoft.AspNetCore.Mvc;

namespace ITMoppentapper.Web.Controllers
{
    public class TevredenheidController : Controller
    {
        /// <summary>
        /// Deze action kan je oproepen met een HTTP POST naar de url /tevredenheid/registreer.
        /// Aan deze action kan je een JSON meegeven van volgende structuur: 
        /// { 
        ///     "score": ..., 
        ///     "opmerkingen": "..." 
        /// }.
        /// Opgelet: score moet een number zijn, geen string!
        /// </summary>
        /// <param name="score"></param>
        /// <param name="opmerkingen"></param>
        /// <returns>
        /// Een JSON antwoord met 1 property: { "feedback": "..." }
        /// Indien score niet in het interval [0..10] zit krijg je een BadRequest terug.
        /// </returns>
        /// <remarks>
        /// Als je fetch() gebruikt in combinatie met JSON kan je [FromBody] laten staan.
        /// Als je $.post gebruikt laat je [FromBody] best weg.
        /// Als je $.ajax gebruikt kan je het laten staan maar moet je wel aangeven dat je JSON doorstuurt.
        /// </remarks>
        [HttpPost]
        public IActionResult Registreer([FromBody] TevredenheidModel tevredenheid)
        {
            // Hier zou je de score (en opmerkingen) kunnen loggen in de database.
            // Dat is uiteraard out of scope voor dit examen!
            // ...

            // Onderstaande code maakt een .NET object met één property (feedback).
            if (tevredenheid.Score < 0) return BadRequest("De score moet 0 of hoger zijn.");
            else if (tevredenheid.Score > 10) return BadRequest("De score moet 10 of lager zijn.");
            else if (tevredenheid.Score < 5) return Json(new { feedback = "Ooh, spijtig dat je het niet zo leuk vond." });
            else if (tevredenheid.Score < 8) return Json(new { feedback = "We blijven werken aan nog betere moppen!" });
            else return Json(new { feedback = "Bedankt voor je positieve feedback!" });
        }
    }
}
