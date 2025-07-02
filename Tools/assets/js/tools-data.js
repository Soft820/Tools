// Tools Data - All 100+ tools organized by categories
const toolsData = {
    categories: [
        {
            id: 'image-tools',
            name: 'Image Tools',
            icon: 'fas fa-image',
            color: 'primary',
            tools: [
                {
                    name: 'Image to PNG Converter',
                    description: 'Convert images to PNG format with transparency support',
                    url: 'tools/image-to-png.html',
                    icon: 'fas fa-file-image',
                    popular: true
                },
                {
                    name: 'Image to JPG Converter',
                    description: 'Convert images to JPG format with quality control',
                    url: 'tools/image-to-jpg.html',
                    icon: 'fas fa-file-image',
                    popular: true
                },
                {
                    name: 'Image Resizer',
                    description: 'Resize images to any dimensions while maintaining quality',
                    url: 'tools/image-resizer.html',
                    icon: 'fas fa-expand-arrows-alt',
                    popular: true
                },
                {
                    name: 'Image Compressor',
                    description: 'Compress images to reduce file size without losing quality',
                    url: 'tools/image-compressor.html',
                    icon: 'fas fa-compress-alt',
                    popular: true
                },
                {
                    name: 'Image Cropper',
                    description: 'Crop images to remove unwanted areas',
                    url: 'tools/image-cropper.html',
                    icon: 'fas fa-crop-alt'
                },
                {
                    name: 'Convert Image to Base64',
                    description: 'Convert images to Base64 string for web use',
                    url: 'tools/image-to-base64.html',
                    icon: 'fas fa-code'
                },
                {
                    name: 'Convert WebP to PNG',
                    description: 'Convert WebP images to PNG format',
                    url: 'tools/webp-to-png.html',
                    icon: 'fas fa-exchange-alt'
                },
                {
                    name: 'GIF Maker',
                    description: 'Create animated GIFs from images or videos',
                    url: 'tools/gif-maker.html',
                    icon: 'fas fa-film'
                },
                {
                    name: 'QR Code Generator',
                    description: 'Generate QR codes for URLs, text, or contact info',
                    url: 'tools/qr-code-generator.html',
                    icon: 'fas fa-qrcode',
                    popular: true
                },
                {
                    name: 'Screenshot to PDF Converter',
                    description: 'Convert screenshots to PDF documents',
                    url: 'tools/screenshot-to-pdf.html',
                    icon: 'fas fa-file-pdf'
                }
            ]
        },
        {
            id: 'seo-tools',
            name: 'SEO Tools',
            icon: 'fas fa-search',
            color: 'success',
            tools: [
                {
                    name: 'Meta Tag Generator',
                    description: 'Generate optimized meta tags for your website',
                    url: 'tools/meta-tag-generator.html',
                    icon: 'fas fa-tags',
                    popular: true
                },
                {
                    name: 'Keyword Density Checker',
                    description: 'Analyze keyword density in your content',
                    url: 'tools/keyword-density-checker.html',
                    icon: 'fas fa-percentage'
                },
                {
                    name: 'Sitemap Generator',
                    description: 'Generate XML sitemaps for your website',
                    url: 'tools/sitemap-generator.html',
                    icon: 'fas fa-sitemap'
                },
                {
                    name: 'Robots.txt Generator',
                    description: 'Create robots.txt files for search engines',
                    url: 'tools/robots-txt-generator.html',
                    icon: 'fas fa-robot'
                },
                {
                    name: 'Google Index Checker',
                    description: 'Check if your pages are indexed by Google',
                    url: 'tools/google-index-checker.html',
                    icon: 'fab fa-google'
                },
                {
                    name: 'Domain Authority Checker',
                    description: 'Check domain authority and page authority',
                    url: 'tools/domain-authority-checker.html',
                    icon: 'fas fa-chart-line'
                },
                {
                    name: 'Backlink Checker',
                    description: 'Analyze backlinks to your website',
                    url: 'tools/backlink-checker.html',
                    icon: 'fas fa-link'
                },
                {
                    name: 'Page Speed Checker',
                    description: 'Test your website loading speed',
                    url: 'tools/page-speed-checker.html',
                    icon: 'fas fa-tachometer-alt'
                },
                {
                    name: 'XML Sitemap Validator',
                    description: 'Validate your XML sitemap for errors',
                    url: 'tools/xml-sitemap-validator.html',
                    icon: 'fas fa-check-circle'
                },
                {
                    name: 'Mobile-Friendly Test',
                    description: 'Test if your website is mobile-friendly',
                    url: 'tools/mobile-friendly-test.html',
                    icon: 'fas fa-mobile-alt'
                }
            ]
        },
        {
            id: 'text-tools',
            name: 'Text Tools',
            icon: 'fas fa-font',
            color: 'info',
            tools: [
                {
                    name: 'Word Counter',
                    description: 'Count words, characters, and paragraphs in text',
                    url: 'tools/word-counter.html',
                    icon: 'fas fa-calculator',
                    popular: true
                },
                {
                    name: 'Character Counter',
                    description: 'Count characters with and without spaces',
                    url: 'tools/character-counter.html',
                    icon: 'fas fa-text-width'
                },
                {
                    name: 'Case Converter',
                    description: 'Convert text case (UPPER, lower, Title, etc.)',
                    url: 'tools/case-converter.html',
                    icon: 'fas fa-exchange-alt',
                    popular: true
                },
                {
                    name: 'Plagiarism Checker',
                    description: 'Check text for plagiarism and duplicate content',
                    url: 'tools/plagiarism-checker.html',
                    icon: 'fas fa-copy'
                },
                {
                    name: 'Grammar Checker',
                    description: 'Check grammar and spelling in your text',
                    url: 'tools/grammar-checker.html',
                    icon: 'fas fa-spell-check'
                },
                {
                    name: 'Text-to-Speech',
                    description: 'Convert text to speech with different voices',
                    url: 'tools/text-to-speech.html',
                    icon: 'fas fa-volume-up'
                },
                {
                    name: 'Speech-to-Text',
                    description: 'Convert speech to text using voice recognition',
                    url: 'tools/speech-to-text.html',
                    icon: 'fas fa-microphone'
                },
                {
                    name: 'URL Encoder & Decoder',
                    description: 'Encode and decode URLs for web use',
                    url: 'tools/url-encoder-decoder.html',
                    icon: 'fas fa-link'
                },
                {
                    name: 'Fancy Text Generator',
                    description: 'Generate fancy text with different fonts',
                    url: 'tools/fancy-text-generator.html',
                    icon: 'fas fa-magic'
                },
                {
                    name: 'Random Text Generator',
                    description: 'Generate random text for testing purposes',
                    url: 'tools/random-text-generator.html',
                    icon: 'fas fa-random'
                }
            ]
        },
        {
            id: 'developer-tools',
            name: 'Developer Tools',
            icon: 'fas fa-code',
            color: 'warning',
            tools: [
                {
                    name: 'JSON Formatter',
                    description: 'Format and validate JSON data',
                    url: 'tools/json-formatter.html',
                    icon: 'fas fa-brackets-curly',
                    popular: true
                },
                {
                    name: 'HTML to Markdown Converter',
                    description: 'Convert HTML to Markdown format',
                    url: 'tools/html-to-markdown.html',
                    icon: 'fas fa-file-code'
                },
                {
                    name: 'CSS Minifier',
                    description: 'Minify CSS code to reduce file size',
                    url: 'tools/css-minifier.html',
                    icon: 'fas fa-compress-alt'
                },
                {
                    name: 'JavaScript Minifier',
                    description: 'Minify JavaScript code for production',
                    url: 'tools/javascript-minifier.html',
                    icon: 'fab fa-js-square'
                },
                {
                    name: 'SQL Formatter',
                    description: 'Format SQL queries for better readability',
                    url: 'tools/sql-formatter.html',
                    icon: 'fas fa-database'
                },
                {
                    name: 'HTACCESS Redirect Generator',
                    description: 'Generate .htaccess redirect rules',
                    url: 'tools/htaccess-redirect-generator.html',
                    icon: 'fas fa-arrow-right'
                },
                {
                    name: 'Markdown to HTML Converter',
                    description: 'Convert Markdown to HTML format',
                    url: 'tools/markdown-to-html.html',
                    icon: 'fas fa-file-code'
                },
                {
                    name: 'Color Code Picker',
                    description: 'Pick and convert color codes (HEX, RGB, HSL)',
                    url: 'tools/color-code-picker.html',
                    icon: 'fas fa-palette',
                    popular: true
                },
                {
                    name: 'Base64 Encoder & Decoder',
                    description: 'Encode and decode Base64 strings',
                    url: 'tools/base64-encoder-decoder.html',
                    icon: 'fas fa-code'
                },
                {
                    name: 'IP Address Lookup',
                    description: 'Lookup IP address information and location',
                    url: 'tools/ip-address-lookup.html',
                    icon: 'fas fa-map-marker-alt'
                }
            ]
        },
        {
            id: 'calculators',
            name: 'Math & Calculators',
            icon: 'fas fa-calculator',
            color: 'danger',
            tools: [
                {
                    name: 'Percentage Calculator',
                    description: 'Calculate percentages, discounts, and markups',
                    url: 'tools/percentage-calculator.html',
                    icon: 'fas fa-percent',
                    popular: true
                },
                {
                    name: 'Age Calculator',
                    description: 'Calculate age from birth date',
                    url: 'tools/age-calculator.html',
                    icon: 'fas fa-birthday-cake'
                },
                {
                    name: 'BMI Calculator',
                    description: 'Calculate Body Mass Index',
                    url: 'tools/bmi-calculator.html',
                    icon: 'fas fa-weight'
                },
                {
                    name: 'Loan EMI Calculator',
                    description: 'Calculate loan EMI and interest payments',
                    url: 'tools/loan-emi-calculator.html',
                    icon: 'fas fa-money-bill-wave'
                },
                {
                    name: 'Scientific Calculator',
                    description: 'Advanced scientific calculator with functions',
                    url: 'tools/scientific-calculator.html',
                    icon: 'fas fa-calculator'
                },
                {
                    name: 'Discount Calculator',
                    description: 'Calculate discounts and final prices',
                    url: 'tools/discount-calculator.html',
                    icon: 'fas fa-tags'
                },
                {
                    name: 'Currency Converter',
                    description: 'Convert between different currencies',
                    url: 'tools/currency-converter.html',
                    icon: 'fas fa-exchange-alt',
                    popular: true
                },
                {
                    name: 'Time Zone Converter',
                    description: 'Convert time between different time zones',
                    url: 'tools/time-zone-converter.html',
                    icon: 'fas fa-clock'
                },
                {
                    name: 'Binary to Decimal Converter',
                    description: 'Convert between binary, decimal, hex, and octal',
                    url: 'tools/binary-decimal-converter.html',
                    icon: 'fas fa-exchange-alt'
                },
                {
                    name: 'Tip Calculator',
                    description: 'Calculate tips and split bills',
                    url: 'tools/tip-calculator.html',
                    icon: 'fas fa-receipt'
                }
            ]
        },
        {
            id: 'converters',
            name: 'Unit Converters',
            icon: 'fas fa-ruler',
            color: 'secondary',
            tools: [
                {
                    name: 'Length Converter',
                    description: 'Convert between different length units',
                    url: 'tools/length-converter.html',
                    icon: 'fas fa-ruler-horizontal',
                    popular: true
                },
                {
                    name: 'Weight Converter',
                    description: 'Convert between different weight units',
                    url: 'tools/weight-converter.html',
                    icon: 'fas fa-weight-hanging'
                },
                {
                    name: 'Speed Converter',
                    description: 'Convert between different speed units',
                    url: 'tools/speed-converter.html',
                    icon: 'fas fa-tachometer-alt'
                },
                {
                    name: 'Temperature Converter',
                    description: 'Convert between Celsius, Fahrenheit, and Kelvin',
                    url: 'tools/temperature-converter.html',
                    icon: 'fas fa-thermometer-half',
                    popular: true
                },
                {
                    name: 'Volume Converter',
                    description: 'Convert between different volume units',
                    url: 'tools/volume-converter.html',
                    icon: 'fas fa-cube'
                },
                {
                    name: 'Data Storage Converter',
                    description: 'Convert between data storage units',
                    url: 'tools/data-storage-converter.html',
                    icon: 'fas fa-hdd'
                },
                {
                    name: 'Energy Converter',
                    description: 'Convert between different energy units',
                    url: 'tools/energy-converter.html',
                    icon: 'fas fa-bolt'
                },
                {
                    name: 'Pressure Converter',
                    description: 'Convert between different pressure units',
                    url: 'tools/pressure-converter.html',
                    icon: 'fas fa-compress-alt'
                },
                {
                    name: 'Fuel Efficiency Converter',
                    description: 'Convert fuel efficiency units',
                    url: 'tools/fuel-efficiency-converter.html',
                    icon: 'fas fa-gas-pump'
                },
                {
                    name: 'Angle Converter',
                    description: 'Convert between degrees, radians, and gradians',
                    url: 'tools/angle-converter.html',
                    icon: 'fas fa-compass'
                }
            ]
        },
        {
            id: 'security-tools',
            name: 'Security & Encryption',
            icon: 'fas fa-shield-alt',
            color: 'dark',
            tools: [
                {
                    name: 'MD5 Hash Generator',
                    description: 'Generate MD5 hash for text or files',
                    url: 'tools/md5-hash-generator.html',
                    icon: 'fas fa-hashtag'
                },
                {
                    name: 'SHA256 Hash Generator',
                    description: 'Generate SHA256 hash for text or files',
                    url: 'tools/sha256-hash-generator.html',
                    icon: 'fas fa-hashtag'
                },
                {
                    name: 'Password Generator',
                    description: 'Generate strong random passwords',
                    url: 'tools/password-generator.html',
                    icon: 'fas fa-key',
                    popular: true
                },
                {
                    name: 'Random String Generator',
                    description: 'Generate random strings for various purposes',
                    url: 'tools/random-string-generator.html',
                    icon: 'fas fa-random'
                },
                {
                    name: 'URL Shortener',
                    description: 'Shorten long URLs for easy sharing',
                    url: 'tools/url-shortener.html',
                    icon: 'fas fa-link',
                    popular: true
                },
                {
                    name: 'IP Geolocation Finder',
                    description: 'Find location information for IP addresses',
                    url: 'tools/ip-geolocation-finder.html',
                    icon: 'fas fa-map-marker-alt'
                },
                {
                    name: 'SSL Certificate Checker',
                    description: 'Check SSL certificate validity and details',
                    url: 'tools/ssl-certificate-checker.html',
                    icon: 'fas fa-lock'
                },
                {
                    name: 'Whois Lookup',
                    description: 'Lookup domain registration information',
                    url: 'tools/whois-lookup.html',
                    icon: 'fas fa-search'
                },
                {
                    name: 'HTTP Headers Checker',
                    description: 'Check HTTP headers of websites',
                    url: 'tools/http-headers-checker.html',
                    icon: 'fas fa-list'
                },
                {
                    name: 'Privacy Policy Generator',
                    description: 'Generate privacy policy for your website',
                    url: 'tools/privacy-policy-generator.html',
                    icon: 'fas fa-file-contract'
                }
            ]
        },
        {
            id: 'social-media-tools',
            name: 'Social Media Tools',
            icon: 'fab fa-share-alt',
            color: 'primary',
            tools: [
                {
                    name: 'YouTube Thumbnail Downloader',
                    description: 'Download YouTube video thumbnails',
                    url: 'tools/youtube-thumbnail-downloader.html',
                    icon: 'fab fa-youtube'
                },
                {
                    name: 'Instagram Photo Downloader',
                    description: 'Download Instagram photos and stories',
                    url: 'tools/instagram-photo-downloader.html',
                    icon: 'fab fa-instagram'
                },
                {
                    name: 'Twitter Video Downloader',
                    description: 'Download videos from Twitter',
                    url: 'tools/twitter-video-downloader.html',
                    icon: 'fab fa-twitter'
                },
                {
                    name: 'Facebook Video Downloader',
                    description: 'Download videos from Facebook',
                    url: 'tools/facebook-video-downloader.html',
                    icon: 'fab fa-facebook'
                },
                {
                    name: 'TikTok Video Downloader',
                    description: 'Download TikTok videos without watermark',
                    url: 'tools/tiktok-video-downloader.html',
                    icon: 'fab fa-tiktok'
                },
                {
                    name: 'YouTube Tags Extractor',
                    description: 'Extract tags from YouTube videos',
                    url: 'tools/youtube-tags-extractor.html',
                    icon: 'fab fa-youtube'
                },
                {
                    name: 'Hashtag Generator',
                    description: 'Generate trending hashtags for social media',
                    url: 'tools/hashtag-generator.html',
                    icon: 'fas fa-hashtag'
                },
                {
                    name: 'Social Media Post Generator',
                    description: 'Generate engaging social media posts',
                    url: 'tools/social-media-post-generator.html',
                    icon: 'fas fa-edit'
                },
                {
                    name: 'Emoji Keyboard',
                    description: 'Copy and paste emojis for social media',
                    url: 'tools/emoji-keyboard.html',
                    icon: 'far fa-smile'
                },
                {
                    name: 'Twitter Character Counter',
                    description: 'Count characters for Twitter posts',
                    url: 'tools/twitter-character-counter.html',
                    icon: 'fab fa-twitter'
                }
            ]
        },
        {
            id: 'miscellaneous-tools',
            name: 'Miscellaneous Tools',
            icon: 'fas fa-tools',
            color: 'info',
            tools: [
                {
                    name: 'Barcode Generator',
                    description: 'Generate barcodes in various formats',
                    url: 'tools/barcode-generator.html',
                    icon: 'fas fa-barcode'
                },
                {
                    name: 'Meme Generator',
                    description: 'Create memes with custom text and images',
                    url: 'tools/meme-generator.html',
                    icon: 'far fa-laugh-squint'
                },
                {
                    name: 'Resume Builder',
                    description: 'Create professional resumes online',
                    url: 'tools/resume-builder.html',
                    icon: 'fas fa-file-alt'
                },
                {
                    name: 'Invoice Generator',
                    description: 'Generate professional invoices',
                    url: 'tools/invoice-generator.html',
                    icon: 'fas fa-receipt'
                },
                {
                    name: 'Business Name Generator',
                    description: 'Generate creative business names',
                    url: 'tools/business-name-generator.html',
                    icon: 'fas fa-building'
                },
                {
                    name: 'Lottery Number Generator',
                    description: 'Generate random lottery numbers',
                    url: 'tools/lottery-number-generator.html',
                    icon: 'fas fa-ticket-alt'
                },
                {
                    name: 'Flip a Coin Simulator',
                    description: 'Simulate coin flips for decision making',
                    url: 'tools/flip-coin-simulator.html',
                    icon: 'fas fa-circle'
                },
                {
                    name: 'Random Number Generator',
                    description: 'Generate random numbers within a range',
                    url: 'tools/random-number-generator.html',
                    icon: 'fas fa-dice'
                },
                {
                    name: 'Dice Roller Simulator',
                    description: 'Roll virtual dice for games',
                    url: 'tools/dice-roller-simulator.html',
                    icon: 'fas fa-dice-d6'
                },
                {
                    name: 'Internet Speed Test',
                    description: 'Test your internet connection speed',
                    url: 'tools/internet-speed-test.html',
                    icon: 'fas fa-tachometer-alt'
                },
                {
                    name: 'Daily Planner Creator',
                    description: 'Create daily planners and schedules',
                    url: 'tools/daily-planner-creator.html',
                    icon: 'fas fa-calendar-day'
                },
                {
                    name: 'Wedding Invitation Generator',
                    description: 'Create beautiful wedding invitations',
                    url: 'tools/wedding-invitation-generator.html',
                    icon: 'fas fa-heart'
                },
                {
                    name: 'Story Plot Generator',
                    description: 'Generate creative story plots and ideas',
                    url: 'tools/story-plot-generator.html',
                    icon: 'fas fa-book'
                },
                {
                    name: 'E-book Creator',
                    description: 'Create e-books from your content',
                    url: 'tools/ebook-creator.html',
                    icon: 'fas fa-book-open'
                },
                {
                    name: 'AI Chatbot Demo',
                    description: 'Interactive AI chatbot demonstration',
                    url: 'tools/ai-chatbot-demo.html',
                    icon: 'fas fa-robot'
                },
                {
                    name: 'IP Address Tracker',
                    description: 'Track and monitor IP addresses',
                    url: 'tools/ip-address-tracker.html',
                    icon: 'fas fa-map-marker-alt'
                },
                {
                    name: 'Fake Address Generator',
                    description: 'Generate fake addresses for testing',
                    url: 'tools/fake-address-generator.html',
                    icon: 'fas fa-map'
                },
                {
                    name: 'Calculator for Electric Bills',
                    description: 'Calculate electricity consumption and bills',
                    url: 'tools/electric-bill-calculator.html',
                    icon: 'fas fa-bolt'
                },
                {
                    name: 'Leap Year Checker',
                    description: 'Check if a year is a leap year',
                    url: 'tools/leap-year-checker.html',
                    icon: 'fas fa-calendar-check'
                },
                {
                    name: 'Name to Numerology Calculator',
                    description: 'Calculate numerology for names',
                    url: 'tools/name-numerology-calculator.html',
                    icon: 'fas fa-star'
                }
            ]
        }
    ]
};

// Get all tools as a flat array for search functionality
function getAllTools() {
    const allTools = [];
    toolsData.categories.forEach(category => {
        category.tools.forEach(tool => {
            allTools.push({
                ...tool,
                category: category.name,
                categoryId: category.id
            });
        });
    });
    return allTools;
}

// Get popular tools
function getPopularTools() {
    const allTools = getAllTools();
    return allTools.filter(tool => tool.popular).slice(0, 10);
} 