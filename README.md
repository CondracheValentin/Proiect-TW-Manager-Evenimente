# Proiect-TW-Manager-Evenimente

In acest proiect se realizeaza o aplicatie de management de evenimente care utilizeaza serviciul BingMaps pentru a furniza informatii de localizare.

Cu aceasta aplicatie putem vedea locatiile evenimentelor,putem vedea conditiile de drum,putem descoperii zonele unde se afla trafic aglomerat
sau putem descoperii unde se afla concertele,actiunile caritabile,evenimentele scolare etc.

Organizatorii pot invita participanti si monitoriza confirmarile de participare. Participantii pot interactiona cu evenimentul prin intermediul platformei.

Aplicatia web ofera notificari si alerte pentru a asigura ca participantii sunt la curent cu detaliile evenimentului si eventualele modificari.

Utilizatorii pot interactiona cu harta pentru a obtine directii catre locatia evenimentului, vizualiza puncte de interes in apropiere si evalua accesibilitatea.

In aceasta aplicatie avem 2 entitati:

1.Eveniment(entitate parinte)

   Atribute:ID,nume,descriere,data,ora,locatie
   
2.Locatie(entitate copil)

   Atribute:ID,nume,adresa,latitudine,longitudine
