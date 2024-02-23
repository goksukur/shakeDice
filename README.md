# shakeDice

**Dice game with JS.**

![](https://github.com/goksukur/shakeDice/blob/d4831837bc226b4f7550edcaa1f2d92349dffe31/Shake%20Dice.png)

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
