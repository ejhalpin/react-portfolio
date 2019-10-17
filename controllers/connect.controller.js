require("dotenv").config();
var sg = require("sendgrid")(process.env.SG_MAIL_KEY);

module.exports = {
  sendMessage: (req, res) => {
    var request = sg.emptyRequest({
      method: "POST",
      path: "/v3/mail/send",
      body: {
        personalizations: [
          {
            to: [
              {
                email: "ejhalpin3@gmail.com"
              }
            ],
            subject: `${req.body.name} has sent you a message through your portfolio!`
          }
        ],
        from: {
          email: req.body.email
        },
        content: [
          {
            type: "text/html",
            value: req.body.message
          }
        ]
      }
    });
    sg.API(request)
      .then(info => {
        var relay = sg.emptyRequest({
          method: "POST",
          path: "/v3/mail/send",
          body: {
            personalizations: [
              {
                to: [
                  {
                    email: req.body.email
                  }
                ],
                subject: `Thank you for connecting!`
              }
            ],
            from: {
              email: "ejhalpin3@gmail.com"
            },
            content: [
              {
                type: "text/html",
                value: `Thanks for contacting me. I've received your message and I'll get back to you as soon as I can.
                Cheers,
                Eugene Halpin
                315-263-2128
                ejhalpin3@gmail.com`
              }
            ]
          }
        });
        sg.API(relay).then(conf => {
          res.json({ info, conf });
        });
      })
      .catch(err => {
        res.status(500).json({ err });
      });
  }
};
