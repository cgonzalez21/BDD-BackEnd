const Card = require("../models/card");

exports.saveCard = (req, res, next) => {
    const card = new Card({
      userId: req.body.userId,
      productId: req.body.productId,
      amount: req.body.amount
    });
    card
      .save()
      .then(result => {
        res.status(201).json({
          message: "Card created!",
          result: result
        });
      })
      .catch(err => {
        res.status(500).json({
          error: err
        });
      });
};


exports.getCard = (req, res, next) => {
  const cardQuery = Card.find();
  let fetchedCards;
  cardQuery
    .then(documents => {
      fetchedCards = documents;
      return Card.count();
    })
    .then(count => {
      res.status(200).json({
        message: "Cards fetched successfully!",
        card: fetchedCards,
        maxCards: count
      });
    })
    .catch(error => {
      res.status(500).json({
        message: "Fetching cards failed!"
      });
    });
};