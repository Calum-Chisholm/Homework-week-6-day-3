const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const result = this.journeys.map((journey) => {
    return journey.startLocation
  })
  return result
};

Traveller.prototype.getJourneyEndLocations = function () {
  const result = this.journeys.map((journey) => {
    return journey.endLocation
  })
  return result
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const result = this.journeys.filter(journey => journey.transport === transport);
  return result;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const result = this.journeys.filter(journey => journey.distance > minDistance);
  return result;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const result = this.journeys.reduce((runningTotal, journey) => {
    return runningTotal + journey.distance;
  }, 0);
  return result;
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  let array = [];
  let journeys = this.journeys
  journeys.forEach((journey) => {
    if (!array.includes(journey.transport)) {
      array.push(journey.transport)
    }
  })
  return array
};

// let array = [];
// let journeys = this.journeys
// journeys.forEach((journey) => {
//   if (!array.includes(journey.transport)) {
//     array.push(journey.transport)
//   }
// })
// return array
// };
//
// const result = this.films.find((film) => {
//     if (film.title === title) {
//   return film
//     };
//     });
//   return result;

module.exports = Traveller;
