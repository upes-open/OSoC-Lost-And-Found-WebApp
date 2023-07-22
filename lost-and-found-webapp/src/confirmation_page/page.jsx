var NewComponent = React.createClass({
    render: function() {
      return (
        <div>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Document</title>
          <link rel="stylesheet" href="style.css" />
          <div className="content">
            <div className="text">
              <p> Successfully <span id="element"> </span> </p>
              <span>You may claim your item from Lost And Found Department..</span>
            </div>
            <section>
              <div className="pic">
                <img src="9013f7b5eb6db0f41f4fd51d989491e7.gif" alt="" />
              </div>
              <div className="curve" />
            </section>
          </div>
          <style dangerouslySetInnerHTML={{__html: "\n        @import url('https://fonts.googleapis.com/css2?family=Lumanosimo&family=Open+Sans:ital,wght@0,300;0,600;0,700;0,800;1,400;1,500&family=Poppins:wght@300;400;700&family=Roboto:wght@100;300;400;500;700;900&family=Ubuntu+Condensed&family=Ubuntu:ital,wght@1,300&family=VT323&display=swap');\nbody{\n   margin: 0;\n   padding: 0;\n   font-family: 'VT323', monospace;\n}\n\n.content{\n   display: flex;\n   flex-direction: row;\n   height: 765px;\nbackground-image: linear-gradient(\n      75deg,\n      hsl(6deg 100% 72%) 1%,\n      hsl(15deg 100% 69%) 43%,\n      hsl(23deg 97% 66%) 50%,\n      hsl(31deg 91% 63%) 51%,\n      hsl(39deg 82% 60%) 51%,\n      hsl(48deg 71% 56%) 49%,\n      hsl(59deg 58% 54%) 49%,\n      hsl(73deg 63% 58%) 50%,\n      hsl(90deg 70% 64%) 57%,\n      hsl(114deg 79% 71%) 99%\n    );\n   }\n\n.text{\n   width: 50%;\n   text-align: center;\n}\n\n.text p{\n   margin-top: 300px;\n   font-size: 45px;\n   color: white;\n}\n\n#element{\n   font-size: 42px;\n   color: rgb(212, 18, 18);\n}\n\n.text span{\n   font-size: 30px;\n   margin-left: 10px;\n   margin-top: 30px;\n   color: rgb(255, 255, 255);\n}\n\n\n.pic{\n   width: 50%;\n\n}\n\n\n.pic img{\n  justify-content: center;\n  padding: 150px;\n  height: 350px;\n  width: 350px;\n  position: relative;\n  border-radius: 50%;\n  \n}\n      " }} />
        </div>
      );
    }
  });