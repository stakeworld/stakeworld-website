## using JS widget
<script type="text/javascript" src="https://cdn.statuspage.io/se-v2.js"></script>
<script>
  var sp = new StatusPage.page({ page : 'gn3bcsr3tsg9' });
  sp.status({
    success : function(data) {
      console.log(data.status.indicator);
    }
  });
</script>
