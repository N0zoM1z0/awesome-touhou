# [Awesome Touhou](https://n0zom1z0.github.io/awesome-touhou/) [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

<p align="center">
  <a href="https://n0zom1z0.github.io/awesome-touhou/"><img src="website/static/favicon.svg" width="96" alt="Awesome Touhou logo"></a>
</p>

Bullet hell shoot 'em up game series and doujin media franchise created by ZUN.

## Contents

- [Official Resources and Getting Started](#official-resources-and-getting-started)
  - [Official Resources](#official-resources)
  - [Getting Started](#getting-started)
- [Game Tools](#game-tools)
  - [Launchers and Compatibility](#launchers-and-compatibility)
  - [Input and Integrations](#input-and-integrations)
  - [Netplay](#netplay)
  - [Patching and Modding](#patching-and-modding)
- [Gameplay, Replays, and Scoring](#gameplay-replays-and-scoring)
  - [Strategy and Competitive Play](#strategy-and-competitive-play)
  - [Practice and Replay Tools](#practice-and-replay-tools)
  - [Scoreboards and Replay Archives](#scoreboards-and-replay-archives)
- [Reverse Engineering and Preservation](#reverse-engineering-and-preservation)
- [Game Development](#game-development)
- [Fighting Games](#fighting-games)
- [Music and Data](#music-and-data)
- [Open-source Fangames](#open-source-fangames)
- [Touhou in Other Games](#touhou-in-other-games)
- [Knowledge and Community](#knowledge-and-community)

## Official Resources and Getting Started

### Official Resources

_Official guidance and trusted sources for official and authorized news._

- [Touhou Project Fan Creator Guidelines](https://touhou-project.news/guideline/) - The official multilingual guidelines for fan works, distribution, monetization, crowdfunding, and other derivative activities.
- [Touhou Yomoyama News](https://touhou-project.news/) - A committee-run hub for official and authorized Touhou Project news, with ZUN serving as honorary chair.
- [公認作品](https://touhou-project.news/products/) - The official catalog of authorized Touhou games, books, music, merchandise, and other products, filterable by release date, category, and company.

### Getting Started

_Essential starting points for discovering, obtaining, and playing Touhou games._

- [Getting Started](https://en.touhouwiki.net/wiki/Getting_Started) - A newcomer-oriented introduction to the official games and the wider series.
- [Purchasing Guide](https://en.touhouwiki.net/wiki/Purchasing_Guide) - Where and how to legally purchase official Touhou games and music.
- [Touhou Patch Center](https://www.thpatch.net/wiki/Touhou_Patch_Center:Download) - Multilingual community patches and installation instructions for official games.

## Game Tools

### Launchers and Compatibility

_Tools for organizing, launching, and running Touhou games across platforms._

- [9Launcher](https://github.com/wearrrrr/9Launcher) - A Windows and Linux launcher with support for official Touhou games, thcrap, DOSBox-X, Proton, and Wine.
- [thcrap-menu](https://github.com/philipguin/thcrap-menu) - A lightweight, controller-friendly menu for choosing per-game thcrap configurations on Windows and Steam Deck/Proton.
- [thcrap Steam Proton Wrapper](https://github.com/nerusuki/thcrap-steam-proton-wrapper) - Launches official Steam releases with thcrap patches through Proton on GNU/Linux.
- [Touhou Linux Guide](https://daichungus.github.io/touhoulinuxguide/) - A practical guide to running Windows-era and PC-98 Touhou games on Linux with Wine, Lutris, DOSBox-X, and Neko Project II Kai.
- [Touhou Steam Executable Patches](https://github.com/MisterMonstr/2hu_steam-exe_to_disc-exe) - Converts supported Steam executables to their original disc form for compatibility with tools such as vpatch.
- [Universal THCRAP Launcher](https://github.com/thpatch/Universal-THCRAP-Launcher) - A universal game launcher for thcrap configurations.

### Input and Integrations

_Tools for configuring controls and connecting games to other applications._

- [thkmc](https://github.com/wz520/thkmc) - Adds custom key mappings to supported Touhou STGs by patching their executables.
- [ThMouseX](https://github.com/Meigyoku-Thmn/ThMouseX) - Enables mouse control for official Touhou shooting games, with preconfigured support for Touhou 6 through Touhou 20.
- [TouhouKeymap](https://github.com/devinacker/TouhouKeymap) - A thcrap plugin that adds per-game configurable keyboard controls to supported official Touhou games.
- [TouhouRPC](https://github.com/TheBakaRem/TouhouRPC) - Adds Discord Rich Presence support to Touhou games.

### Netplay

_Tools that improve or replace online play in official Touhou games._

- [Ju.N.Owen](https://github.com/progre/junowen) - An alternative netplay layer for Touhou 19 v1.10c with adjustable delay, shared and reserved rooms, direct P2P connections, and spectating.

### Patching and Modding

_Core tools for patching game data, translating games, and building mods._

- [neopatch](https://github.com/astral4/neopatch) - An open-source patch that reduces end-to-end latency and adds optimizations and game-specific fixes across sixteen official Touhou shooting games.
- [thcrap](https://github.com/thpatch/thcrap) - The community patching, translation, and modding framework for Touhou games.
- [thtk](https://github.com/thpatch/thtk) - A command-line toolkit for extracting, creating, compiling, and decompiling Touhou game data.
- [Touhou 6 APWorld](https://github.com/Nepley/eosd-apworld) - Adds Embodiment of Scarlet Devil to the Archipelago multi-game randomizer, with configurable stage, resource, difficulty, and Extra Stage progression.
- [Touhou 7 APWorld](https://github.com/Nepley/pcb-apworld) - Adds Perfect Cherry Blossom to the Archipelago multi-game randomizer, with configurable stage, resource, difficulty, Extra Stage, and Phantasm Stage progression.
- [Touhou 8 APWorld](https://github.com/Nepley/in-apworld) - Adds Imperishable Night to the Archipelago multi-game randomizer, with configurable team, stage, time, Spell Practice, and Extra Stage progression.
- [truth](https://github.com/ExpHP/truth) - A multipass compiler and decompiler suite for binary script formats used by Touhou shooting games.

## Gameplay, Replays, and Scoring

### Strategy and Competitive Play

_Guides, events, and community resources for learning, scoring, survival, and competitive play._

- [The Danmaku Gameplay Wiki](https://wiki.maribelhearn.com/wiki/Main_Page) - A gameplay-focused wiki covering mechanics, strategy, scoring, and competitive play for official Touhou shooting games.
- [Touhou World Cup](https://touhouworldcup.com/) - The hub for an annual international Touhou shooting-game competition, with rules, schedules, results, and multilingual broadcasts.
- [東方Project攻略 Wiki](https://wikiwiki.jp/thk/) - A Japanese strategy wiki with stage routes, mechanics, scoring notes, replay references, and bug documentation across the official shooting games.

### Practice and Replay Tools

_Tools for practice, replay inspection, and analysis of saved game data._

- [thhyl](https://github.com/wz520/thhyl) - A desktop viewer for metadata stored in Touhou STG replay (`.rpy`) files.
- [thprac](https://github.com/touhouworldcup/thprac) - A comprehensive practice tool for official Touhou shooting games.
- [threp](https://github.com/wasupandceacar/threp) - Parses Touhou replay metadata and recorded input sequences.
- [ThScoreFileConverter](https://github.com/y-iihoshi/ThScoreFileConverter) - Generates text or HTML summaries from score files and PNG images from best-shot data for many official Touhou games.

### Scoreboards and Replay Archives

_Active scoreboards and preserved collections of historical Touhou replays._

- [Gensokyo Replay Archive](https://maribelhearn.com/gensokyo) - Preserves replays from the defunct replays.gensokyo.org with searchable metadata.
- [Royalflare Archive](https://maribelhearn.com/royalflare) - Preserves Royalflare's historical replay and ranking data with full search.
- [Silent Selene](https://www.silentselene.net/) - An active replay host and scoreboard covering the PC-98 and Windows shooting games.
- [Touhou World Records](https://maribelhearn.com/wr) - Tracks score world records across official Touhou shooting games, with replay downloads where available.

## Reverse Engineering and Preservation

_Source reconstruction and technical research that preserve how the games work._

- [ReC98](https://github.com/nmlgc/ReC98) - Reconstructs readable, binary-equivalent source code for the five PC-98 Touhou games.
- [Touhou 6 Decompilation](https://github.com/GensokyoClub/th06) - A decompilation of Embodiment of Scarlet Devil version 1.02h.
- [Touhou 7 Decompilation](https://github.com/some100/th07) - A fully implemented, nearly byte-accurate decompilation of Perfect Cherry Blossom version 1.00b, with cross-platform porting branches.
- [Touhou 8 Agent-First Source Reconstruction](https://github.com/N0zoM1z0/th08) - An agent-first continuation of the GensokyoClub decompilation, with reproducible binary matching and documented reverse-engineering workflows.
- [Touhou 8 Decompilation](https://github.com/GensokyoClub/th08) - A decompilation of Imperishable Night version 1.00d.

## Game Development

_Engines and authoring tools for building Touhou-style games and scripts._

- [LuaSTG Editor Sharp X](https://github.com/Sharp-X-Team/LuaSTG-Editor-Sharp-X) - A graphical code generator for authoring LuaSTG games across multiple engine variants.
- [LuaSTG Sub](https://github.com/Legacy-LuaSTG-Engine/LuaSTG-Sub) - A maintained modern LuaSTG engine that moves rendering and audio to newer Windows APIs.
- [Sparen's Danmakufu ph3 Tutorials](https://sparen.github.io/ph3tutorials/ph3tutorials.html) - A peer-reviewed, step-by-step curriculum for learning Danmakufu ph3 scripting, with references and documentation backups.
- [Touhou Danmakufu ph3sx-2](https://github.com/Natashi/Touhou-Danmakufu-ph3sx-2) - A performance-oriented Danmakufu ph3 fork with expanded scripting and archive features.

## Fighting Games

_Launchers, mods, and netplay improvements for Touhou fighting games._

- [giuroll](https://github.com/Hagb/giuroll-hagb) - A maintained successor to the original Giuroll rollback netcode mod, with replay improvements for Touhou Hisoutensoku.
- [Soku Launcher](https://github.com/0Miles/soku-launcher) - A dedicated launcher for Touhou Hisoutensoku.
- [SokuMods](https://github.com/SokuDev/SokuMods) - A collected, reproducible source tree for SWRSToys, SokuEngine, and their Hisoutensoku modules.

## Music and Data

_Tools, databases, and distribution resources for identifying, tagging, extracting, discovering, and playing Touhou music._

- [foo_thbgm](https://github.com/nyfair/foo_thbgm) - A foobar2000 component that directly plays BGM from Touhou games and related fangames.
- [Touhou Music Extractor](https://github.com/lyons/touhou_music_extractor) - A command-line tool for extracting music files from Touhou games.
- [TouHou Player](https://github.com/BearKidsTeam/thplayer) - A cross-platform BGM player that reads music directly from Touhou game installations, supporting Touhou 6 through Touhou 19 and several spin-off shooters.
- [Touhou Song Sorter](https://github.com/relick/touhou-song-sorter) - An interactive sorter for ranking favorite Touhou songs.
- [Touhou Tagger](https://github.com/the1812/Touhou-Tagger) - Fills Touhou Project CD track metadata using information from THBWiki.
- [TouhouDB](https://touhoudb.com/) - A multilingual collaborative database of Touhou artists, albums, songs, PVs, tags, and release events, with streaming integrations and a public API.
- [TouhouThemeDB](https://github.com/thpatch/TouhouThemeDB) - A MediaWiki extension that provides structured data for canonical Touhou music themes.
- [ZUN氏作曲音楽データベースWiki](https://w.atwiki.jp/tohomusicdb/) - A community-edited Japanese music-analysis wiki for ZUN's compositions, cataloging BPM, meter, key, instrumentation, chord progressions, and appearances across games and music releases.
- [東方同人音楽流通](https://www.touhou-music.jp/) - An authorized digital-distribution program and catalog for Touhou doujin music, handling rights clearance for participating circles.

## Open-source Fangames

_Playable fan games whose source code is publicly available._

- [Cirno's Perfect Snowglide](https://github.com/wareya/Cirnos-Perfect-Snowglide) - An ice-physics platformer in which Cirno snowboards through stages, built with Godot and playable on the web, Windows, and Linux.
- [Kutaka Run](https://github.com/ax9880/kutaka-run) - A Cookie Run-inspired platformer where Kutaka runs, jumps, slides, and collects ingredients, with story stages, an Extra Stage, and browser and Windows builds.
- [Minecraft VS Zombies 2](https://github.com/Cuerzor/MinecraftVsZombies2Unity) - A Unity tower-defense crossover combining Plants vs. Zombies mechanics, Minecraft elements, and a Touhou story set in Gensokyo, with Windows, Linux, and Android builds.
- [Mizuchi Takeover HD](https://github.com/ax9880/mizuchi-takeover) - A least-cost-path puzzle about navigating Touhou character appearances to reach Reimu, with browser and Windows builds and local two-player play.
- [Stages!](https://github.com/ax9880/stages) - A Touhou matching-card game where players assemble stage-character sets from the same game, with browser play and up to four-player LAN multiplayer in the desktop build.
- [Taisei](https://github.com/taisei-project/taisei) - A polished, free, and open-source Touhou-style bullet hell game for desktop platforms and the web.

## Touhou in Other Games

_Substantial Touhou-themed mods and curated resources for Touhou content in other games._

- [Esoterica Origins](https://github.com/wdfeer/esoterica-origins) - A Fabric add-on for Minecraft Origins with dozens of Touhou-inspired origins, distinct character playstyles, custom Graze and Flawless effects, and documented powers.
- [Gensokyo](https://steamcommunity.com/sharedfiles/filedetails/?id=2817254924) - A large tModLoader content mod for Terraria adding Touhou bosses, enemies, hundreds of items, mini-biomes, a custom subworld, music, and multiplayer support.
- [Touhou Little Maid](https://github.com/TartaricAcid/TouhouLittleMaid) - A Forge and NeoForge Minecraft mod that adds customizable Touhou-inspired maids, combat, farming, and other systems.
- [Touhou osu! Index](https://github.com/N0zoM1z0/touhou-osu-index) - An open, reproducible, automatically maintained catalog of Touhou music mapped in osu!, with provenance, confidence-based review, and JSON and CSV exports.
- [Touhou Stellar Chronicles ~ Symphony of Phantasm](https://steamcommunity.com/sharedfiles/filedetails/?id=1834433554) - A large Stellaris content mod adding Touhou species, leaders, events, a Spiritual Power and Spell Card technology tree, custom economies, planets, megastructures, ships, and crises.

## Knowledge and Community

_Curated references, publications, community tools, and multilingual knowledge bases._

- [Fumo Guides](https://fumo.website/) - Community-maintained guides and structured information about Touhou Fumo plushes.
- [Maribel Hearn's Touhou Portal](https://maribelhearn.com/) - A privacy-friendly collection of game tools, replay and scoring resources, and community references.
- [THBWiki](https://thwiki.cc/) - A Chinese-language Touhou encyclopedia and community database with extensive music, event, and publication coverage.
- [Touhou Garakuta Magazine](https://touhougarakuta.com/) - A multilingual Touhou and doujin-culture publication featuring current news, interviews, reports, criticism, and creator-focused coverage.
- [Touhou Wiki](https://en.touhouwiki.net/) - A multilingual community encyclopedia covering official works, characters, gameplay, music, and fan culture.

## Contributing

Contributions are welcome. Please read the [contribution guidelines](CONTRIBUTING.md) before opening a pull request.

## Footnotes

Awesome Touhou is an unofficial community project and is not affiliated with ZUN or Team Shanghai Alice. Superseded and reference-only resources with lasting research or preservation value are kept in [Historical and Reference Projects](historical.md).
