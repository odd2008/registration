/**
 * Created by songzhongkun on 2018/5/28.
 */


let counter = 0;
function createData(name, calories, fat, carbs, protein) {
  counter += 1;
  return {id: counter, name, calories, fat, carbs, protein};
}

module.exports = (req, res, next) => {

  const {page, perPage} = req.query;
  console.log(page, perPage);

  const data = {
    code: '200',
    msg: 'success',
    data: {
      total: 498,
      list: [
        createData('Cupcake', page + '' + 305, 3.7, 67, 4.3),
        createData('Donut', page + '' + 452, 25.0, 51, 4.9),
        createData('Eclair', page + '' + 262, 16.0, 24, 6.0),
        createData('Frozen yoghurt', page + '' + 159, 6.0, 24, 4.0),
        createData('Gingerbread', page + '' + 356, 16.0, 49, 3.9),
        createData('Honeycomb', page + '' + 408, 3.2, 87, 6.5),
        createData('Ice cream sandwich', page + '' + 237, 9.0, 37, 4.3),
        createData('Jelly Bean', page + '' + 375, 0.0, 94, 0.0),
        createData('KitKat', page + '' + 518, 26.0, 65, 7.0),
        createData('Lollipop', page + '' + 392, 0.2, 98, 0.0),
      ],
    },
  };

  res.json(data.data);

};