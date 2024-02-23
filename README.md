# shakeDice

**Dice game with JS.**

##JS

            var todice
              todice = [
                "⚀",
                "⚁",
                "⚂",
                "⚃",
                "⚄",
                "⚅"
              ]

            function dices() {
              var destiny1 = Math.floor(Math.random() * 6);

              var destiny2 = Math.floor(Math.random() * 6);

              var content = todice[destiny1] + todice[destiny2];

              document.getElementById('dices').innerHTML = content;
            };
           dices();

You can call the code following:

          id="dices" onclick="dices()

**_Enjoy!_**
