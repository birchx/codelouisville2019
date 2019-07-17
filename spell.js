// a list of all poem excepts

var quotes = [{
  author: "",
    quote: "Shatter the glass: it wants to be the sand it came from."
  },
  {
    author: "",
    quote: "Which is worth more, the coin clutched in a bloody hand or the voice around it, singing?"
  },
  {
    author: "",
    quote: "The curtains are coming unmoored from the windows."
  },
  {
    author: "",
    quote: "As if a lamb is ever safe."
  },
  {
    author: "",
    quote: "They don’t speak because it is too late to wake you."
  },
  {
    author: "",
    quote: "Underground there is time for careful spelling."
  },
  {
    author: "",
    quote: "Late at night the wolves stay quiet because they are hunting."
  },
  {
    author: "",
    quote: "What I know about forests is they always grow back."
  },
  {
    author: "",
    quote: "When we see them, we see how need makes them weak."
  },
  {
    author: "",
    quote: "When you did not know how to keep breathing, you kept breathing."
  },
  {
    author: "",
    quote: "Ash is not a ring of flowers, and death is not a wedding."
  },
  {
    author: "",
    quote: "What milk made her jaws so white? I want some too."
  },
  {
    author: "",
    quote: "If there is power, better claim it."
  },
  {
    author: "",
    quote: "If heat is a currency I am rich with flame."
  },
  {
    author: "",
    quote: "Hear the chug of the engine, the flickering engine."
  },
  {
    author: "",
    quote: "Whisper soft into the right ear of the weather."
  },
  {
    author: "",
    quote: "The water will rise from the well."
  },
  {
    author: "",
    quote: "Blame the clouds for your fear of lightning and you are a fool."
  },
  {
    author: "",
    quote: "Survival requires milk or blood."
  },
  {
    author: "",
    quote: "Raise whatever singing you can manage."
  },
  {
    author: "",
    quote: "When you ring, ring loud, exactly when you need to."
  },
  {
    author: "",
    quote: "There’s a difference between the storms you are given and the storms you chase."
  },
  {
    author: "",
    quote: "This fire burns for me alone."
  },
  {
    author: "",
    quote: "Fallow is the seed crushed under the ruminate hooves of cows."
  },
  {
    author: "",
    quote: "Give your every drop."
  },
  {
    author: "",
    quote: "Every fortress is made of bricks with seams and gates with keys."
  },
  {
    author: "",
    quote: "Pretend there is iron in your heart and the winter will hit you hardest."
  },
  {
    author: "",
    quote: "Let yourself be warm."
  },
  {
    quote: "Make your own light when you need to."
  },
  {
    quote: "What I take, I pay for."
  }
 
  ];
  
  // variables for the script
  var requestButton = document.querySelector("#requestButton"),
  quote_line = document.querySelector("#quote"),
  chosen_quote_object,
  running = 0,
  interval,
  index = 0;

  // create array to compare
Array.prototype.compare = function(test_array) {
  for (var i = 0; i < this.length; i++) {
    if (test_array.indexOf(this[i]) == -1)
      return false;
  }
  return true;
};
  
  // button click function
  requestButton.addEventListener("click", function() {
    if (running === 0) {
      quote_line.innerHTML = "";
      write_quote();
    }
  });  
  
  // function to type letter by letter
  function type_out(letter, text, line) {
    letter = index;
    if (letter == text.length) {
    index = 0;
    clearInterval(interval);
    running = 0;
    return;
    }
    line.innerHTML += text[letter];
    index++;
  }
  
  // randomly select a quote and return
  function write_quote() {
    running = 1;
    var q = quotes[Math.floor(Math.random() * quotes.length)],
      quote = q.quote.split('');
    chosen_quote_object = q;
    interval = setInterval(type_out, 85, index, chosen_quote_object.quote.split(''), quote_line);
  }
  
  