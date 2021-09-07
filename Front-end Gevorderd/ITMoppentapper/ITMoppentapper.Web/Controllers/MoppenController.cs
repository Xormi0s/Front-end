using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;

namespace ITMoppentapper.Web.Controllers
{
    public class MoppenController : Controller
    {
        // Inspiratie voor deze moppen:
        // http://www.devtopics.com/best-programming-jokes/
        // https://www.reddit.com/r/AskReddit/comments/1kvhmz/whats_the_best_programming_joke_that_you_know/
        private static List<string> _moppen = new List<string>
        {
            "How many programmers does it take to change a light bulb? None – It’s a hardware problem",
            "There are only 10 kinds of people in this world: those who know binary and those who don’t.",
            "Programming is 10% science, 20% ingenuity, and 70% getting the ingenuity to work with the science.",
            "Question: what's the object-oriented to become wealthy? Answer: inheritance",
            "Question: Why do Java programmers have to wear glasses? Answer: Because they don't C#.",
            "A SQL query goes into a bar, walks up to two tables and asks ... 'Can I join you?'",
            "Question: Why did the programmer quit his job? Answer: because he didn't get arrays.",
            "I've got a really good UDP joke to tell you, but I don't know if you'll get it",
            "What's the best part about TCP jokes? I get to keep telling them until you get them."
        };

        // Een 'randomizer'. Dit object geeft willekeurige getallen terug...
        // Dit wordt dus gebruik om willekeurig moppen te selecteren.
        private Random _random = new Random();

        /// <summary>
        /// Deze action kan je oproepen met een HTTP GET naar de relatieve url /moppen/laatmelachen
        /// </summary>
        /// <returns>
        /// Een JSON antwoord met 3 properties: { "mopTekst": "...", "mopIndex": ..., "totaalAantalMoppen": ... }.
        /// De eerste property is een string, de 2 andere properties zijn numbers.
        /// </returns>
        [HttpGet]
        public JsonResult LaatMeLachen()
        {
            int randomJokeIndex = _random.Next(0, _moppen.Count - 1);
            string randomJoke = _moppen[randomJokeIndex];

            // Onderstaande code maakt een (anonymous) .NET object aan met 3 properties.
            return Json(
                new 
                {
                    mopTekst = randomJoke,
                    mopIndex = randomJokeIndex,
                    totaalAantalMoppen = _moppen.Count
                });
        }
    }
}
