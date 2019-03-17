<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    {{dogs}}
  </div>
</template>

<script>


export default {
  name: 'app',
  data () {
   return {
     dogs: []
   }
  },
  methods: {
    getData(){
      return {"status":"success","message":{"affenpinscher":[],"african":[],"airedale":[],"akita":[],"appenzeller":[],"basenji":[],"beagle":[],"bluetick":[],"borzoi":[],"bouvier":[],"boxer":[],"brabancon":[],"briard":[],"bulldog":["boston","french"],"bullterrier":["staffordshire"],"cairn":[],"cattledog":["australian"],"chihuahua":[],"chow":[],"clumber":[],"cockapoo":[],"collie":["border"],"coonhound":[],"corgi":["cardigan"],"cotondetulear":[],"dachshund":[],"dalmatian":[],"dane":["great"],"deerhound":["scottish"],"dhole":[],"dingo":[],"doberman":[],"elkhound":["norwegian"],"entlebucher":[],"eskimo":[],"frise":["bichon"],"germanshepherd":[],"greyhound":["italian"],"groenendael":[],"hound":["afghan","basset","blood","english","ibizan","walker"],"husky":[],"keeshond":[],"kelpie":[],"komondor":[],"kuvasz":[],"labrador":[],"leonberg":[],"lhasa":[],"malamute":[],"malinois":[],"maltese":[],"mastiff":["bull","english","tibetan"],"mexicanhairless":[],"mix":[],"mountain":["bernese","swiss"],"newfoundland":[],"otterhound":[],"papillon":[],"pekinese":[],"pembroke":[],"pinscher":["miniature"],"pointer":["german","germanlonghair"],"pomeranian":[],"poodle":["miniature","standard","toy"],"pug":[],"puggle":[],"pyrenees":[],"redbone":[],"retriever":["chesapeake","curly","flatcoated","golden"],"ridgeback":["rhodesian"],"rottweiler":[],"saluki":[],"samoyed":[],"schipperke":[],"schnauzer":["giant","miniature"],"setter":["english","gordon","irish"],"sheepdog":["english","shetland"],"shiba":[],"shihtzu":[],"spaniel":["blenheim","brittany","cocker","irish","japanese","sussex","welsh"],"springer":["english"],"stbernard":[],"terrier":["american","australian","bedlington","border","dandie","fox","irish","kerryblue","lakeland","norfolk","norwich","patterdale","russell","scottish","sealyham","silky","tibetan","toy","westhighland","wheaten","yorkshire"],"vizsla":[],"weimaraner":[],"whippet":[],"wolfhound":["irish"]}}
    },
  },
  mounted: function () {
    // REQUEST: https://dog.ceo/api/breeds/list/all
    // Replace local data with remote data
    // use axios axios.get('https://dog.ceo/api/breeds/list/all').then(...)

    this.dogs = this.getData().message

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
