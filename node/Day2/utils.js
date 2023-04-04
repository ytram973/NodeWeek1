function calculateTTC(priceHT) {
    const TTC = priceHT * 1.2; 
    return parseFloat(TTC.toFixed(2)); 
  }
  
  module.exports = {
    calculateTTC,
  };
  