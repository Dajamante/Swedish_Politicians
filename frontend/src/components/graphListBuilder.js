import axios from "axios";


export function createList(type, start, end){
  let res = [];
  axios
        .get(
          "http://ec2-3-81-166-212.compute-1.amazonaws.com/api/v1/" +
            "getLedamot"  +
            "?startdate=" +
            start +
            "&enddate=" +
            end +
            "&type=" +
            type
        )
        .then((result) =>
            res = result.data.values,
        );

  let list = []
  let i = 0
  for(const person of res){
    list[i] = {value:person.person_id, label:person.person.name} //Måste uppdateras för att matcha API.
    i++
  }
  return list
}
