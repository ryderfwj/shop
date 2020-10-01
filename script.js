const vm = Vue.createApp({
  data() {
    return {
      viewItem: "egg",
      kampung: [
        {
          size: "BESAR",
          o: "12.50",
          f: "60.00",
        },
        {
          size: "SERDAHANA",
          o: "12.00",
          f: "57.50",
        }
      ],
      chicken: [
        {
          size: "AA",
          o: "12.50",
          f: "60.00",
        },
        {
          size: "BB",
          o: "12.00",
          f: "57.50",
        },
        {
          size: "CC",
          o: "12.50",
          f: "60.00",
        },
        {
          size: "DD",
          o: "12.00",
          f: "57.50",
        },
        {
          size: "EE",
          o: "12.50",
          f: "60.00",
        },
        {
          size: "FF",
          o: "12.00",
          f: "57.50",
        }
      ],
    }
  },
  methods: {
    changeToEgg: function () {
      console.log("Egg")
      this.viewItem = "egg";
    }, 
    changeToBonzai: function () {
      console.log("Bonzai")
      this.viewItem = "bonzai";
    }
  }
}).mount('#vue-app')