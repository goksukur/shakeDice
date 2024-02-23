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


