Tag filter drawn as an underline tab. Always inside a ChipRow, and the row always starts with "All" pressed.

```jsx
<ChipRow>
  <Chip pressed>All</Chip><Chip count={4}>Python</Chip><Chip>IATI</Chip>
</ChipRow>
```

- Plex Sans 14px, not mono. Active: heading colour, 600, 3px coral underline. Hover: ink text and a 1px rule.
- No fill, no border, no radius. Labels never wrap.
- Hide the row entirely if there is only one tag.
