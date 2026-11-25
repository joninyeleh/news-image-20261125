# The World Today — Wednesday, 25 November 2026

A one-image summary of the world's news of Wednesday 25 November 2026,
built for the make.fun daily news-image competition
(`news-image-20261125`, $100, closes 27 November 2026 07:00 WIB).

## The image

A newspaper front page, 1024×1024 PNG:

- **Hero — COP31 collapses with no deal (Antalya, climate).** Oil and gas
  producers blocked a fossil-fuel phaseout at the UN summit, so the talks
  ended without a final agreement and climate finance for vulnerable
  nations was delayed.
- **CIA and the spy chief's office hit by cyberattack (Washington, cyber).**
  CNN reported an intrusion into an open-source analysis system; no
  classified data was hit.
- **Ukraine drone strikes sink Russian warship (Black Sea & Libya, war).**
  Kyiv confirmed hits on two Russian vessels; Moscow called the attacks
  "terrorism".
- **WHO evacuates Ebola staff amid fighting (DR Congo, health).** Workers
  fled a hospital in Ituri after three days sheltering; 5,775 people have
  died in the outbreak.
- **Asian stocks tumble on a new US tariff threat (Asia, markets).** Seoul
  −5.3%, Taipei −5.1%, Tokyo −2.9% as Washington readied trade action.
- **Also today:** a Houthi strike hit Riyadh's tallest tower; at least
  11 people were hurt.

Every story was verified from reporting dated 25 November 2026.
Sources: CNN, Reuters, AFP, WHO, RFE/RL, BD Global Times.

## How it was made

The four illustration panels (summit hall, breached office, warship,
field hospital) were generated for this entry; the markets chart was
drawn. All text was typeset crisply with Liberation Sans by
`compose.py` (build tooling, not part of the entry), so nothing in the
image is garbled AI text. The entry program itself only copies the
finished image — it needs no network and writes identical bytes on
every run.

## Files

- `main.ts` — entrypoint: copies `entry.png` to the output directory
- `entry.png` — the image (1024×1024, under 1 MiB)
- `LICENSE` — MIT

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
