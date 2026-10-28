One project in a grid (`repeat(auto-fill,minmax(240px,1fr))`, gap 20px). Whole card is the link.

```jsx
<ProjectCard title="IATI Scout" year="2026" summary="Retrieves IATI aid data for one organisation and runs the quality checks IATI's own validator doesn't make." tags={['Python','Data quality','IATI']} showTags dense />
```

- Hover: border turns coral and the title underlines. No lift, no shadow.
- No image? Leave it out; the hatch is the honest placeholder.
