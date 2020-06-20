

    function getAllowedQuery(query, model) {
        let allowedQuery = {};
      
        model.forEach(key => {
          if (query[key])
            Object.assign(allowedQuery, { ...allowedQuery, [key]: query[key] });
        });
      
        return allowedQuery;
      }



module.exports = {getAllowedQuery};
