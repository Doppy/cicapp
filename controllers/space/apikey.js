const cuid = require('cuid');
const Space = require('../../models/Space');

exports.getAllKey = (req, res, next) => {
  const spaceId = req.params.space_id;
  Space.findOne({ _id: spaceId }, (err, space) => {
    if (err) { return next(err); }

    space.save((err) => {
      if (err) next(err);
      res.json({
        title: 'Keys',
        items: space.apiKeys,
      });
    });
  });
};

exports.clearAllKey = (req, res, next) => {
  const spaceId = req.params.space_id;
  Space.findOne({ _id: spaceId }, (err, space) => {
    if (err) { return next(err); }

    space.apiKeys = [];

    space.save((err) => {
      if (err) next(err);
      res.json({
        title: 'Cleared key',
        space,
      });
    });
  });
};

exports.createKey = (req, res, next) => {

  const spaceId = req.params.space_id;

  const { name, description } = req.body;
  const deliveryKey = cuid();
  const previewKey = cuid();

  Space.findOne({ _id: spaceId }, (err, space) => {
    if (err) { return next(err); }

    space.apiKeys.push({
      name,
      description,
      deliveryKey,
      previewKey,
    });

    space.save((err) => {
      if (err) next(err);
      res.json({
        title: 'Added key',
        space,
      });
    });
  });
};
