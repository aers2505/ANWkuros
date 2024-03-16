const axios = require('axios');

axios.get('https://api.spotify.com/v1/search?q=babaero&type=track', {
    headers: {
    'Authorization': 'Bearer BQCbgmomr19CdbJKr67BxeFSqPvc2rz8kIwc7G7XjTF7SQNOsPDoipUu_VHJFqqWR9aC9ka7PbNPBIfVnJQzyza8yeTcwJ6PoJHo1D4AQHmt_wI-DYuknfkgPwNf--j2JQB6mrRuNxYVjrda5N0UEF7uLuXmOsfBmaqgc6_dbQgT-KA3lH44MS1fsBBO0n5CAzVobYyJZavY6Hy1FpE'
}
}).then((data)=>{
    console.log(data.data.tracks.items[0].id);
})