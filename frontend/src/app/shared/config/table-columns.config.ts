import { ITable } from '../interfaces/table';

export const TABLE_COLUMNS: ITable ={
  cols: [
    { label: 'ID', keys: ['idDatasheet'] },
    { label: 'Make', keys: ['make'] },
    { label: 'Model', keys: ['model'] },
    { label: 'Make / Model', keys: ['make', 'model'], width: 120 },
    { label: 'Barrels 08', keys: ['barrels08'] },
    { label: 'Barrels A08', keys: ['barrelsa08'] },
    { label: 'Charge 120', keys: ['charge120'] },
    { label: 'Charge 240', keys: ['charge240'] },
    { label: 'City MPG', keys: ['city08'] },
    { label: 'City MPG (U)', keys: ['city08u'] },
    { label: 'City A08', keys: ['citya08'] },
    { label: 'City A08U', keys: ['citya08u'] },
    { label: 'City CD', keys: ['citycd'] },
    { label: 'City E', keys: ['citye'] },
    { label: 'City UF', keys: ['cityuf'] },
    { label: 'CO2', keys: ['co2'] },
    { label: 'CO2A', keys: ['co2a'] },
    { label: 'CO2 Tailpipe AGPM', keys: ['co2tailpipeagpm'] },
    { label: 'CO2 Tailpipe GPM', keys: ['co2tailpipegpm'] },
    { label: 'Combined 08', keys: ['comb08'] },
    { label: 'Combined 08U', keys: ['comb08u'] },
    { label: 'Combined A08', keys: ['comba08'] },
    { label: 'Combined A08U', keys: ['comba08u'] },
    { label: 'Combined E', keys: ['combe'] },
    { label: 'Combined CD', keys: ['combinedcd'] },
    { label: 'Combined UF', keys: ['combineduf'] },
    { label: 'Cylinders', keys: ['cylinders'] },
    { label: 'Displacement', keys: ['displ'] },
    { label: 'Drive', keys: ['drive'] },
    { label: 'Engine ID', keys: ['engid'] },
    { label: 'Engine Description', keys: ['eng_dscr'] },
    { label: 'FE Score', keys: ['fescore'] },
    { label: 'Fuel Cost 08', keys: ['fuelcost08'] },
    { label: 'Fuel Cost A08', keys: ['fuelcosta08'] },
    { label: 'Fuel Type', keys: ['fueltype'] },
    { label: 'Fuel Type 1', keys: ['fueltype1'] },
    { label: 'GHG Score', keys: ['ghgscore'] },

  ],
  data: [],
  onClick: hello

}


function hello(){
 console.log("hello world")
}
