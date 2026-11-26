export const privacyPolicy = {
  title: 'Match Food Privacy Policy',
  effectiveDate: '26 November 2026',
  contact: 'tech@nu3careplus.com',
  sections: [
    {
      title: '1. Scope and operator',
      paragraphs: [
        'This Privacy Policy applies to Match Food on the website and in Android and iOS applications. It explains what information is handled by the game, what remains in device storage, and what may be handled by service providers when you use features such as fonts, support email or advertising. The technical storage and services can differ by platform and release.',
        'Match Food is operated by Nu3careplus in Nigeria and is intended for players aged 13 and over. For privacy questions or requests, contact tech@nu3careplus.com.',
      ],
    },
    {
      title: '2. Game information and device storage',
      paragraphs: [
        'Match Food stores game information locally so the game can save and restore progress. This can include campaign progress and stars; coins, lives and boosters; food discoveries, country cards and collectibles; restaurant items, orders and furniture; game settings; an unfinished Adventure or Practice run; and pending game results and rewards. The game also stores local rewarded-ad frequency and receipt records to apply ad limits and prevent duplicate rewards.',
        'The website stores the game save in browser storage for that website and browser profile. Android and iOS apps store it in web storage associated with the installed app. A website save and an app save are separate. Match Food does not provide player accounts or its own cloud-save service, and the game code does not send the save to a Match Food game server. The Android project permits operating-system app backup; platform backup or device-transfer features may preserve or restore app data depending on system settings. Exact WebView-save backup behavior on Android and iOS has not been verified for released builds.',
      ],
    },
    {
      title: '3. Information handled by service providers',
      paragraphs: [
        'When you visit the website, its hosting provider delivers the pages, scripts, artwork and other files. The provider may receive the IP address, request time, requested address, browser or device information, and technical information normally sent with a web request. The game code does not send your local save record to a Match Food game server.',
        'Some versions request font styles and font files from Google Fonts at fonts.googleapis.com and fonts.gstatic.com. When those requests occur, Google may receive your IP address, browser or device information and request metadata. The game does not send your puzzle board, coins or restaurant save to Google Fonts. If the requests are unavailable, the game uses fallback fonts. Google explains its handling at https://developers.google.com/fonts/faq/privacy and https://policies.google.com/privacy.',
        'The production AdMob configurations prepared for Android and iOS use Google Mobile Ads and Google’s consent tools. When a required privacy choice has been completed and the consent SDK allows ad requests, Google may process information such as IP address, app and advertising interactions (for example, ad views or taps), diagnostics, and device or advertising identifiers where available. Google describes its SDK data practices at https://policies.google.com/privacy and https://developers.google.com/admob/android/privacy/play-data-disclosure. The platform, region and consent choice determine whether an ad request is made.',
        'The game does not currently use a third-party player analytics service, player account service, cloud-save provider, or Match Food game API. The current browser version does not use the native mobile advertising SDK. Information handled by the website host, Google Fonts, an advertising provider or your email provider is subject to that provider’s own privacy information.',
      ],
    },
    {
      title: '4. Advertising and optional rewarded ads',
      paragraphs: [
        'Match Food may offer advertisements in versions where advertising is enabled and available. These may include optional rewarded ads: if you choose to watch an offered ad and the advertising provider confirms completion, the game may grant the displayed in-game reward, such as coins or lives. Closing an ad, an unavailable ad, or an unconfirmed completion does not earn the reward. Rewards are virtual game items, not money.',
        'An app version may also show an occasional interstitial ad at a natural break, such as between completed levels. Ads are not required to play or complete the core game, and an interstitial is not intended to interrupt an active puzzle. Availability and frequency can depend on the platform, release configuration, region, consent requirements and ad inventory. The website does not currently request the native mobile ad SDK.',
        'When an ad provider is used, it may process device, network, ad-interaction and diagnostic information to deliver, measure, secure and limit advertising. Where required, the app presents privacy choices before requesting ads and provides access to applicable privacy options. The provider’s own terms and privacy policy apply to its processing. The game does not use an ad request to upload the local campaign or restaurant save to a Match Food server.',
        'The production Android configuration and iOS production source prepared for this release have ad requests enabled. Requests are gated by Google’s consent result; if the required choice is not complete or the SDK does not allow requests, the game does not request an ad. The public website does not request native mobile ads. Store disclosures and the final native SDK inventory must be checked against each released app before distribution.',
      ],
    },
    {
      title: '5. How information is used',
      paragraphs: [
        'Local game information is used to run the game, save and restore progress, apply rewards once, recover an unfinished game or completed victory, remember settings and ownership, and provide the backup controls you choose to use.',
        'Website request information is used by the website host to deliver and protect the website. Font requests provide typography. If advertising is enabled, the ad and consent providers use relevant information for ad delivery, measurement, fraud prevention, diagnostics and privacy choices. Support information is used to answer the message you choose to send.',
        'The game does not currently use personal information to build a player account or profile, conduct third-party analytics, or send game progress to a Match Food server.',
      ],
    },
    {
      title: '6. Cookies, local storage and retention',
      paragraphs: [
        'The game save uses browser or app-associated local storage rather than a player-login cookie. The app also stores local rewarded-ad frequency and receipt records. The game does not set an expiry period for the main save or its migration recovery copies. These records remain in the relevant browser/app storage until that storage is cleared or replaced. Clearing website data, clearing app data, or uninstalling may remove local copies, but operating-system backup or restore may preserve or restore app data according to platform settings. Match Food does not control those platform backups.',
        'The game does not currently use advertising cookies on the website. Website hosting providers or third-party services may use their own cookies or similar technologies under their own policies. Mobile advertising or consent SDKs may use device identifiers or SDK storage needed for ad delivery, measurement, fraud prevention or privacy choices.',
      ],
    },
    {
      title: '7. Save backups, reset and deletion',
      paragraphs: [
        'Settings can download a standard JSON save file containing a snapshot of game progress and related saved state. The file is not encrypted by Match Food, and the game does not automatically upload or email it. Keep it private and delete it yourself when no longer needed. If the app cannot safely read the current save, Settings can instead download a raw preserved copy for recovery; that file is not accepted by the normal Restore control. The downloaded standard save contains the game progress snapshot and its own reward receipts, but not the separate rewarded-ad frequency window record.',
        'Restoring a standard backup requires confirmation and replaces the current save; it does not merge saves. The game validates and normalizes the selected file but does not automatically create a second download of a valid current save before replacing it. Make a separate download first if you may need the current progress later. The downloaded file is not deleted by the game.',
        'Reset replaces the primary game save with fresh progress. Before migrating an older save, the game retains the exact original locally; when a corrupt or newer-version save is explicitly replaced, it attempts to retain a local raw recovery copy. Reset does not remove those recovery copies or the separate rewarded-ad frequency records, and the game currently has no control to delete them. They remain in local storage until that storage is cleared, subject to operating-system backup or restore. The game keeps no server copy from which deleted device-local progress can be recovered.',
      ],
    },
    {
      title: '8. Support messages',
      paragraphs: [
        'If you email tech@nu3careplus.com, the email recipient and services handling the message receive the address you write from, its contents and any attachments you choose to include. This information is used to respond and address the reported issue. Do not send passwords, payment information or unnecessary personal information.',
        'A save file you voluntarily send for troubleshooting contains the game information described in section 2. The game does not automatically send support messages or attachments. Support email providers process messages under their own privacy terms.',
      ],
    },
    {
      title: '9. Security and international processing',
      paragraphs: [
        'Local storage is not an encrypted private account vault. Someone with access to your device or browser profile may be able to access or change it. Protect your device and any backup files. No storage or transmission method can be guaranteed completely secure.',
        'Website hosting, font, advertising, consent and email providers may process technical or support information in countries other than yours under their respective terms and safeguards. The game save is not automatically sent to those providers, except that a save file may be included if you choose to share it with support. An advertising provider’s separate request data is described in sections 3 and 4.',
      ],
    },
    {
      title: '10. Your choices and privacy rights',
      paragraphs: [
        'You can change game preferences in Settings, download a copy of your local progress, restore a backup, reset the save, or clear website data through your browser. You do not need an account to use local save controls.',
        'Depending on where you live and applicable law, you may have rights to access, correct, delete or receive a copy of personal information, restrict or object to processing, withdraw consent where consent applies, or complain to a privacy regulator. Contact tech@nu3careplus.com to make a request. Explain what you need without sending unnecessary identity documents.',
        'Because ordinary game saves are stored locally and are not linked to a player account on a Match Food server, Nu3careplus cannot remotely find or change a save on a device it does not control. Use the local controls for that data. Requests concerning records held by a hosting, font, advertising or email provider may also need to be made to that provider.',
      ],
    },
    {
      title: '11. Children and age guidance',
      paragraphs: [
        'Match Food is intended for players aged 13 and over. The game does not ask players to create an account or enter their age. A 13+ audience does not remove protections that apply to minors. Where parental or guardian consent is required for personal-data processing, it must be obtained before that processing begins.',
        'If you believe a child has sent personal information to Nu3careplus, contact tech@nu3careplus.com so the matter can be reviewed and applicable requirements addressed. A parent or guardian can reset the primary game save using the controls described above; clearing all website or app storage is needed to remove related local records, subject to platform backup or restore.',
      ],
    },
    {
      title: '12. Current and planned features',
      paragraphs: [
        'The current game includes local progress and settings, the campaign, restaurant gameplay, dish discoveries, collectibles, non-cash collectible tokens and local save backup and restore. There are no mandatory player accounts, cloud saves, cash withdrawals, or real-money in-game purchases.',
        'The production Android build and prepared iOS production source enable Google Mobile Ads using separate platform IDs. Optional rewarded coin and life ads, a rewarded level-transition offer, and frequency-limited interstitials may be requested after the consent SDK allows requests and while ads are available. Browser builds do not request native mobile ads, and testing builds use a separate configuration. This production configuration has not been published or submitted.',
        'The iOS application’s final storage, SDKs, network requests and permissions must be verified against its release build before that build is distributed. This policy describes the intended platform-wide practices and does not claim an iOS build or service is already operating.',
        'Collectible tokens, event keepsakes and other game rewards are virtual, non-cash items. They cannot be transferred to another player, withdrawn or exchanged for money.',
      ],
    },
    {
      title: '13. Changes, applicable law and contact',
      paragraphs: [
        'Nu3careplus is based in Nigeria. The Nigeria Data Protection Act 2023 and other applicable privacy laws apply where their requirements are engaged. You may contact the Nigeria Data Protection Commission at https://ndpc.gov.ng/. This policy does not limit rights provided by applicable law.',
        'The effective date appears above. If material data practices change, this policy and relevant in-game, website or store disclosures will be updated before those practices are introduced, and consent will be requested where required.',
        'Privacy and support contact: tech@nu3careplus.com.',
      ],
    },
  ],
} as const;
