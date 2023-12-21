
const country = [
  {
    name: {
      common: "Somalia",
      official: "Federal Republic of Somalia",
      nativeName: {
        ara: {
          official: "جمهورية الصومال",
          common: "الصومال",
        },
        som: {
          official: "Jamhuuriyadda Federaalka Soomaaliya",
          common: "Soomaaliya",
        },
      },
    },
  },
  {
    name: {
      common: "Ghana",
      official: "Republic of Ghana",
      nativeName: {
        eng: {
          official: "Republic of Ghana",
          common: "Ghana",
        },
      },
    },
  },
  {
    name: {
      common: "DR Congo",
      official: "Democratic Republic of the Congo",
      nativeName: {
        fra: {
          official: "République démocratique du Congo",
          common: "RD Congo",
        },
        kon: {
          official: "Repubilika ya Kongo Demokratiki",
          common: "Repubilika ya Kongo Demokratiki",
        },
        lin: {
          official: "Republiki ya Kongó Demokratiki",
          common: "Republiki ya Kongó Demokratiki",
        },
        lua: {
          official: "Ditunga dia Kongu wa Mungalaata",
          common: "Ditunga dia Kongu wa Mungalaata",
        },
        swa: {
          official: "Jamhuri ya Kidemokrasia ya Kongo",
          common: "Jamhuri ya Kidemokrasia ya Kongo",
        },
      },
    },
  },
  {
    name: {
      common: "Albania",
      official: "Republic of Albania",
      nativeName: {
        sqi: {
          official: "Republika e Shqipërisë",
          common: "Shqipëria",
        },
      },
    },
  },
];


country.map((item)=> (console.log(item.name.nativeName)))
