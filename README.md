# 🪄 Frontend Wizards — Stage 0 Task
### Profile Card (Michelle)

This is my submission for **Stage 0 of the HNG Frontend Wizards Cohort**.

It’s a simple, semantic, accessible **Profile Card** built using **plain HTML, CSS, and JavaScript** — fully responsive, keyboard-friendly, and testable via `data-testid` attributes.

---

## 🚀 Live Demo
- **Netlify:** [https://profile-card-stage0.netlify.app/](https://profile-card-stage0.netlify.app)
- **Github:** [https://michycipher.github.io/profile-card/](https://michycipher.github.io/profile-card)
---

## 🧱 Features & Requirements Checklist

| Requirement | Implemented? | Description |
|--------------|--------------|-------------|
| `data-testid="test-profile-card"` | ✅ | Root article container |
| `test-user-name` | ✅ | User name heading |
| `test-user-bio` | ✅ | Short biography |
| `test-user-time` | ✅ | Dynamic `Date.now()` in milliseconds (updates every second) |
| `test-user-avatar` | ✅ | Avatar image with alt text and upload support |
| `test-user-social-links` | ✅ | List of accessible social links |
| `test-user-hobbies` | ✅ | Hobbies list |
| `test-user-dislikes` | ✅ | Dislikes list |
| Semantic HTML | ✅ | Uses `<article>`, `<figure>`, `<nav>`, `<section>`, `<ul>` |
| Responsive layout | ✅ | Flexbox-based, adapts from column to row |
| Keyboard navigation | ✅ | Focus styles visible for all links |
| Accessible alt & labels | ✅ | Image alt text + label for upload |

---

## 🧠 Avatar Upload Behavior

The avatar supports **two ways to display an image**:

1. **Default URL (fallback)** — A remote image is shown by default.  
2. **Upload (optional)** — You can upload any image file. The browser uses `URL.createObjectURL()` to generate a temporary local URL and instantly preview it, satisfying the “must display an image URL” rule.

> This works entirely client-side — no server uploads required.

---

## 🛠️ Run Locally

### Option 1: Open directly
Just open `index.html` in your browser.

### Option 2: VS Code Live Server (recommended)
1. Install the **Live Server** extension.
2. Right-click `index.html` → **Open with Live Server**.

---

## 🌍 Deployment

### GitHub Pages
1. Go to **Settings → Pages**.
2. Under “Source,” select **Branch: main**, folder **/(root)** → **Save**.
3. Access at `https://michycipher.github.io/profile-card/`.

### Netlify
1. Go to [https://app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag & drop your project folder.
3. Get a live URL instantly, or link repo for automatic deploys.


