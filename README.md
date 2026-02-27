# LanguageFlag Marketing Website

Beautiful marketing landing page for LanguageFlag built with Tailwind CSS.

## Features

✨ **Hero Section**
- Eye-catching headline
- Animated flag demonstrations (🇺🇸 🇺🇦 🇪🇸)
- Clear value proposition
- Dual CTAs (Download + Demo)

🎯 **Feature Showcase**
- 6 feature cards with hover animations
- Icons and descriptions
- Responsive grid layout

🎮 **Interactive Demo**
- Language buttons (English, Ukrainian, Spanish)
- Live flag display with smooth animations
- "Try it yourself" experience

👥 **Use Cases**
- Developers, Writers, Students, Multilingual Users
- Gradient card designs
- Real-world scenarios

💳 **Pricing & CTA**
- Free 14-day trial
- One-time purchase: $4.99
- Clear feature list
- Strong call-to-action

## Tech Stack

- **Tailwind CSS** via CDN
- **Inter Font** from Google Fonts
- **Vanilla JavaScript** for interactivity
- **Pure HTML5** - no build required

## How to View

Simply open `index.html` in any modern browser:

```bash
open index.html
# or
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Customization

### Colors
The site uses a purple-to-indigo gradient theme. To change:
- Modify `from-purple-X to-indigo-X` classes
- Update gradient-text CSS

### Content
All content is in `index.html`:
- Hero text: Lines 60-95
- Features: Lines 110-155
- Pricing: Lines 250+

### Flags
Add more languages in the demo section (around line 200):
```html
<button onclick="showFlag('🇯🇵', '日本語')" class="...">
    日本語
</button>
```

## Next Steps

1. **Screenshots**: Add actual app screenshots
2. **Video**: Embed hero video showing real usage
3. **Download Link**: Connect to actual download/purchase system
4. **Analytics**: Add Google Analytics or similar
5. **SEO**: Add meta tags, Open Graph, structured data
6. **Hosting**: Deploy to Vercel, Netlify, or GitHub Pages

## File Structure

```
website/
├── index.html          # Main landing page
└── README.md          # This file
```

## License

Part of the LanguageFlag project.
