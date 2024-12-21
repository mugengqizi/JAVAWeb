<div id="app">
    <p>{{ reversedMessage }}</p>
  </div>
  
  <script>
    createApp({
      data() {
        return {
          message: 'Hello'
        };
      },
      computed: {
        reversedMessage() {
          return this.message.split('').reverse().join('');
        }
      }
    }).mount('#app');
  </script>