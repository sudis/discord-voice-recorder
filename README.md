# Bot Dyktafonu Discord
>   Przed zalogowaniem chcę udzielić informacji na następujący temat. **Nie jestem głównym właścicielem** projektu. Właśnie rozwijam ten projekt i jeśli główny programista poprosi mnie o odinstalowanie.  Jeśli chcesz usunąć ten projekt, skontaktuj się ze mną. 

##  Adresy
  

 -   Serwer, do którego mam uprawnienia: [**Serendia Squad**](https://discord.gg/serendia)
-    Dla głównego właściciela projektu: [**sravanth-chebrolu**](https://github.com/sravanth-chebrolu/discord-voice-recorder)
-   Moja nazwa użytkownika na Discord: **weiss#0099**

##   Zanim zaczniemy!

> Ten bot jest legalnym botem. **Nie nagrywaj niczyjego głosu bez ich wiedzy.**  Dźwięk zostanie odtworzony, zanim bot rozpocznie nagrywanie.  Podczas rejestracji zmieni się również nazwa i status bota.

##   Ładowanie i konfiguracja

 1. Instalacja bota jest bardzo prosta. Wystarczy pobrać go w formacie zip z Github. 
 2.   Następnie **SHIFT + Prawy przycisk myszy.** 
 3.   Otwórz za pomocą CMD lub Powershell.
 4. Wpisz `npm i`
 5. Następnie, edytuj plik konfiguracyjny.

**Uwaga! Na komputerze musi być zainstalowany _FFMPEG_.**

### Konfiguracja FFMPEG

![https://ffmpeg.org](https://sudis.is-pretty.sexy/6gvYVJr.png)

![Download](https://sudis.is-pretty.sexy/8D4TpcY.png)

![enter image description here](https://sudis.is-pretty.sexy/2iSMYCg.png)

>   **Skopiuj zawartość pliku „bin” w pobranym pliku.  C Utwórz nowy folder na dysku. Wpisz nazwę folderu „FFMPEG”.  Umieść w nim trzy znalezione pliki .exe.**

![FFMPEG](https://sudis.is-pretty.sexy/6EboKw7.png)

>   **Poszukaj ustawienia „Edytuj zmienne środowiskowe systemu”.**

![Environment](https://sudis.is-pretty.sexy/9Ztuwkq.png)

![Settings](https://sudis.is-pretty.sexy/3vq8rYp.png)

> **Podwójne kliknięcie.**
![KLIKUJ](https://sudis.is-pretty.sexy/8VVPMCb.png)

  
> **Utwórz nową jednostkę. Jego nazwa będzie lokalizacją twojego pliku FFMPEG.**
![enter image description here](https://sudis.is-pretty.sexy/ABC8wy7.png)

###   Zakończyłeś konfigurację FFMPEG!

##   Konfigurowanie pliku `config.json`
```
{
    "BOT_TOKEN": "<your-bot-token>",
    "PREFIX": "<your-prefix>"
}
```
  
Wpisz informacje, które otrzymałeś od Discord Developer w sekcji Token. Wybierz żądany prefiks w sekcji prefiksów.

##   Aby uruchomić bota
  Jeśli myślisz, że wykonałeś wszystko, **możesz uruchomić bota** z pliku `start.bat` Dzięki temu plikowi `.bat` Twój bot nigdy nie zostanie zamknięty. 

##   Polecenia 
```
<PREFIX>enter <Nazwa_Kanału> <Nazwa_Nagrania_Pliku_Audio>
```
  
Jeśli wszystko zostało zrobione pomyślnie, bot odegra dźwięk ding. Następnie rozpocznie nagrywanie głosu.

![Starting](https://sudis.is-pretty.sexy/6iA8dwV.gif)

```
<PREFIX>exit <Nazwa_Kanału> 
```

> Za pomocą tego polecenia możesz zapisać plik dźwiękowy.

![EXIT](https://sudis.is-pretty.sexy/5wZe2Es.gif)

 ## Jak mogę otworzyć plik audio?
 
 **»** W tym celu musisz mieć program Audacity. Konwersja pliku audio będzie dość prosta, jeśli taki masz. W sekcji „Plik” przejdź na kartę „Importuj”. Następnie wybierz opcję „Surowe dane”. Możesz uzyskać dostęp do pliku audio, wprowadzając informacje widoczne poniżej. 
 
 **Encoding:** Singed 16-bit PCM 
 **Byte Order:** Little-endian
  **Channels:** 2 Channels (Stereo)
   **Sample Rate:** 48 000 Hz

![enter image description here](https://sudis.is-pretty.sexy/8Z7kzar.gif)

# VERY THANKS!
https://github.com/sravanth-chebrolu/discord-voice-recorder Thanks for Sravanth!

  Na każdy problem: weiss#0099
