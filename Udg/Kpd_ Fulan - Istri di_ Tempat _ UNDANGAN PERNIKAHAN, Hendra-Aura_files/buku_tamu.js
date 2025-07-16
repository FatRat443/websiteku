$(document).ready(function() {
    function fetchData() {
        $.ajax({
            url:"/"+$('#pasanganBuku').val(),
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                var rows = '';
                var no = 1;
                $.each(data, function(index, item) {
                    rows += '<tr>';
                        rows += '<td>' + no++ + '</td>';
                        rows += '<td>' + item.tamu + '</td>';
                        rows += '<td>' + item.waktu1 + ' WIB</td>';
                    rows += '</tr>';
                });
                $('#buku-tamu tbody').html(rows);
            },
            error: function(xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
    }

    // Panggil fetchData pertama kali
    fetchData();

    // Set interval untuk panggilan fetchData setiap 3 detik
    setInterval(fetchData, 3000);
});