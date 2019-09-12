const Transform = require('./transform');

const selectors = (KTObjects, Koder, Kodemaps, Terms) => {
  const alleBucer = Object.assign({}, ...Object.values(Terms.buctyper));
  const alleBuc2Seds = Object.assign({}, ...Object.values(Kodemaps.BUC2SEDS));

  const hentBucTyperForFagomrade = fagomrade => {
    if (!fagomrade) {
      return [];
    }
    return KTObjects.buctyper[Kodemaps.SEKTOR2BUC[fagomrade]];
  };

  const hentSedTyperForBuc = buc => {
    if (!buc) {
      return [];
    }
    return alleBuc2Seds[buc].map(kode => Transform.kodeTilObjekt(kode, KTObjects.sedtyper));
  };

  return {
    alleBucer,
    alleBuc2Seds,
    hentBucTyperForFagomrade,
    hentSedTyperForBuc,
  };
};

module.exports.selectors = selectors;

