const ulangTahun = new Date(new Date().getFullYear(), 9, 19);
      const MenuTanggal = document.getElementById("area-waktu");
      const MenuUcapan = document.getElementById("ucapan-ultah");
      // const ulangTahun = new Date();
      //ulangTahun.setDate(ulangTahun.getDate() + 9);

      let $days = document.getElementById("hari");
      let $hours = document.getElementById("jam");
      let $minutes = document.getElementById("menit");
      let $seconds = document.getElementById("detik");

      setInterval(function () {
        var now = new Date();
        var timeLeft = (ulangTahun - now) / 1000;
        updateclock(timeLeft);
      }, 1000);

      function updateclock(remainingTime) {
        let days = Math.floor(remainingTime / 86400);
        remainingTime -= days * 86400;

        let hours = Math.floor(remainingTime / 3600) % 24;
        remainingTime -= hours * 3600;

        let minutes = Math.floor(remainingTime / 60) % 60;
        remainingTime -= minutes * 60;

        let seconds = Math.floor(remainingTime % 60);

        if (days === 0) {
          MenuTanggal.style.display = "none";
          MenuUcapan.style.display = "block";
        } else {
          $days.innerHTML = Number(days);
          $hours.innerHTML = Number(hours);
          $minutes.innerHTML = Number(minutes);
          $seconds.innerHTML = Number(seconds);
        }
      }

      function Number(number) {
        return number < 10 ? "0" + number : number;
      }