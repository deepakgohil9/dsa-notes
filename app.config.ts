export default defineAppConfig({
  shadcnDocs: {
    site: {
      name: 'DSA Flash Notes',
      description: 'Beautifully designed DSA FLash Notes.'
    },
    theme: {
      customizable: false,
      color: 'zinc',
      radius: 0.5
    },
    header: {
      title: 'DSA Flash Notes',
      showTitle: true,
      darkModeToggle: true,
      logo: {
        light: '/logo-dark.svg',
        dark: '/logo.svg',
        width: 10
      },
      nav: [],
      links: [
        {
          icon: 'lucide:github',
          to: 'https://github.com/deepakgohil9/dsa-notes',
          target: '_blank'
        }
      ],
    },
    aside: {
      useLevel: false,
      collapse: true
    },
    main: {
      breadCrumb: true,
      showTitle: true,
      codeIcon: {
        'md': 'vscode-icons:file-type-markdown',
        'json': 'vscode-icons:file-type-json',
        'terminal': 'lucide:terminal',
        'cpp': 'vscode-icons:file-type-cpp'
      }
    },
    footer: {
      credits: `Copyright © ${new Date().getFullYear()}`,
      links: [
        {
          icon: 'lucide:github',
          to: 'https://github.com/deepakgohil9/dsa-notes',
          target: '_blank'
        }
      ],
    },
    toc: {
      enable: true,
      enableInMobile: true,
      title: 'On This Page',
      links: [
        {
          title: 'Star on GitHub',
          icon: 'lucide:star',
          to: 'https://github.com/deepakgohil9/dsa-notes',
          target: '_blank'
        },
        {
          title: 'Create Issues',
          icon: 'lucide:circle-dot',
          to: 'https://github.com/deepakgohil9/dsa-notes/issues',
          target: '_blank'
        }
      ]
    },
    search: {
      enable: true,
      inAside: false
    }
  }
});