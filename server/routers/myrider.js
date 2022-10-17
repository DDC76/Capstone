const { Router } = require("express");
const Myriders = require("../models/Myriders");
const router = Router();

// Create record in MongoDB Atlas using Mongoose.js ORM
router.post("/", (request, response) => {
  const newGroup = new Myriders(request.body);
  newGroup.save((error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});

// Get (Read) all records from the collection
router.get("/", (request, response) => {
  Myriders.find({}, (error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});

// Get a single record by ID using a query parameter
router.get("/:id", (request, response) => {
  Myriders.findById(request.params.id, (error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});

//DELETE
router.delete("/:id", (request, response) => {
  Myriders.findByIdAndRemove(request.params.id, {}, (error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});

//UPDATE
router.put("/:id", (request, response) => {
  const body = request.body;
  Myriders.findByIdAndUpdate(
    request.params.id,
    {
      $set: {
        // Take note that the customer is not included, so it can't
        groups: body.groups,
        meetup: body.meetup,
        time: body.time,
        suggestedItems: body.suggestedItems
      }
    },
    {
      new: true,
      upsert: true
    },
    (error, record) => {
      if (error) return response.status(500).json(error);
      return response.json(record);
    }
  );
});

module.exports = router;
