"use strict";(self.webpackChunkstakeworld_io=self.webpackChunkstakeworld_io||[]).push([[669],{8981:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>d,default:()=>h,frontMatter:()=>n,metadata:()=>r,toc:()=>l});var s=a(5893),o=a(1151);const n={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},d=void 0,r={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",source:"@site/docs/snapshot.mdx",sourceDirName:".",slug:"/snapshot",permalink:"/docs/snapshot",draft:!1,unlisted:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/snapshot.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Pool",permalink:"/docs/pool"},next:{title:"Bootnodes",permalink:"/docs/bootnode"}},i={},l=[{value:"Automatic install",id:"automatic-install",level:2},{value:"Manual install",id:"manual-install",level:2},{value:"Setup a validator node",id:"setup-a-validator-node",level:3},{value:"Install the database",id:"install-the-database",level:3},{value:"Edit the systemctl startup script",id:"edit-the-systemctl-startup-script",level:3},{value:"Restore:",id:"restore",level:2},{value:"Generic command",id:"generic-command",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Last update: Tue 03 Sep"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Chain"}),(0,s.jsx)(t.th,{children:"Database"}),(0,s.jsx)(t.th,{children:"Format"}),(0,s.jsx)(t.th,{children:"Blockheight"}),(0,s.jsx)(t.th,{children:"Snapshot"}),(0,s.jsx)(t.th,{children:"Full"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4",children:"direct link"})}),(0,s.jsx)(t.td,{children:"ksmcc3"}),(0,s.jsx)(t.td,{children:"paritydb"}),(0,s.jsx)(t.td,{children:"pruned"}),(0,s.jsx)(t.td,{children:"24753810"}),(0,s.jsx)(t.td,{children:"486G"}),(0,s.jsx)(t.td,{children:"505G"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"http://snapshot.stakeworld.io/paritydb-polkadot.lz4",children:"direct link"})}),(0,s.jsx)(t.td,{children:"polkadot"}),(0,s.jsx)(t.td,{children:"paritydb"}),(0,s.jsx)(t.td,{children:"pruned"}),(0,s.jsx)(t.td,{children:"22367440"}),(0,s.jsx)(t.td,{children:"421G"}),(0,s.jsx)(t.td,{children:"439G"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"http://snapshot.stakeworld.io/paritydb-paseo.lz4",children:"direct link"})}),(0,s.jsx)(t.td,{children:"paseo"}),(0,s.jsx)(t.td,{children:"paritydb"}),(0,s.jsx)(t.td,{children:"pruned"}),(0,s.jsx)(t.td,{children:"2785486"}),(0,s.jsx)(t.td,{children:"94G"}),(0,s.jsx)(t.td,{children:"149G"})]})]})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"snapsize",src:a(9735).Z+"",width:"800",height:"300"})}),"\n",(0,s.jsxs)(t.admonition,{type:"info",children:[(0,s.jsx)(t.p,{children:"Snapshots are compressed backups of the database directory of a polkadot or kusama node. If you start a node for the first time it will start building the database from scratch, which will take a few days, depending on network speed. If you download an up to date database snapshot your node will be up and running quicker; under an hour or a few hours, depending on network speed."}),(0,s.jsxs)(t.p,{children:["Recently the warp sync option is becoming more developed and popular. If you start the node with an empty database and the option ",(0,s.jsx)(t.code,{children:"--sync warp"})," the node will first download the finality proofs after which it will be ready to validate and in the background download the remaining blocks."]}),(0,s.jsx)(t.p,{children:'With the "beefy" update warp sync got temporarily disabled so for the time being the snapshot service is re-enabled.'}),(0,s.jsxs)(t.p,{children:["For now the snapshots are available for kusama ",(0,s.jsx)(t.code,{children:"--chain ksmcc3"})," and polkadot ",(0,s.jsx)(t.code,{children:"--chain polkadot"})," in the paritydb ",(0,s.jsx)(t.code,{children:"--database paritydb"})," database format and the rocksdb ",(0,s.jsx)(t.code,{children:"--database rocksdb"})," format. They are pruned with ",(0,s.jsx)(t.code,{children:"--state-pruning 256"})," (default), which is sufficient for a validator node."]})]}),"\n",(0,s.jsx)(t.h2,{id:"automatic-install",children:"Automatic install"}),"\n",(0,s.jsxs)(t.p,{children:["The following script can restore a snapshot for a quickstart. If you want you can first review it on ",(0,s.jsx)(t.a,{href:"https://github.com/stakeworld/stakeworld-scripts/blob/master/node-install.sh",children:"github"}),'. You can choose "snapinstall" for a snapshot restore or "nodeinstall" to install a complete node. The script will ask some questions and create an install or restore script which you can review before executing.']}),"\n",(0,s.jsx)(t.p,{children:"The script is for ubuntu/debian flavoured servers."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"curl -o- -L https://raw.githubusercontent.com/stakeworld/stakeworld-scripts/master/node-install.sh | bash\n"})}),"\n",(0,s.jsx)(t.h2,{id:"manual-install",children:"Manual install"}),"\n",(0,s.jsx)(t.h3,{id:"setup-a-validator-node",children:"Setup a validator node"}),"\n",(0,s.jsxs)(t.p,{children:["Setting up a validator node is covered ",(0,s.jsx)(t.a,{href:"./validate",children:"here"}),". The default apt install creates an user polkadot with a home directory ",(0,s.jsx)(t.code,{children:"/home/polkadot"})," and a default service script ",(0,s.jsx)(t.code,{children:"/usr/lib/systemd/system/polkadot.service"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"install-the-database",children:"Install the database"}),"\n",(0,s.jsxs)(t.p,{children:["Database location: By default the polkadot binary runs as user polkadot and creates ",(0,s.jsx)(t.code,{children:".local/share/polkadot"})," in the users homedirectory. So for user polkadot (the default when installing from apt) that is ",(0,s.jsx)(t.code,{children:"/home/polkadot/.local/share/polkadot"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["This can be changed with ",(0,s.jsx)(t.code,{children:"--base-path"})," so for example ",(0,s.jsx)(t.code,{children:"--base-path /home/polkadot"})," or ",(0,s.jsx)(t.code,{children:"--base-path /home/polkadot/myvalidator"})," or whatever you prefer."]}),"\n",(0,s.jsx)(t.p,{children:"To delete the old database, restore a new kusama paritydb database snapshot for your node with a default install:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"su - polkadot -s /bin/bash\nrm -fr /home/polkadot/.local/share/polkadot/chains/ksmcc3\nmkdir -p /home/polkadot/.local/share/polkadot/chains/ksmcc3\ncurl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n"})}),"\n",(0,s.jsx)(t.p,{children:"You can check the startup by running the binary as user polkadot and see if it accepts the database or throws any errors:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"su - polkadot -s /bin/bash\npolkadot --chain kusama --database paritydb \n"})}),"\n",(0,s.jsx)(t.h3,{id:"edit-the-systemctl-startup-script",children:"Edit the systemctl startup script"}),"\n",(0,s.jsxs)(t.p,{children:["Edit the default service script and add for example ",(0,s.jsx)(t.code,{children:"--database paritydb --chain kusama"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'su -\nvi /usr/lib/systemd/system/polkadot.service"\nsystemctl daemon-reload\nsystemctl retart polkadot\nsystemctl enable polkadot\n'})}),"\n",(0,s.jsx)(t.p,{children:"Or create a new script by copying the default service script:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"su -\ncp /usr/lib/systemd/system/polkadot.service /etc/systemd/system/validator.service\nvi /etc/systemd/system/validator.service\n"})}),"\n",(0,s.jsx)(t.p,{children:"You can edit settings at wish, changing ports and settings at will."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-config",children:"[Service]\nExecStart=/usr/bin/polkadot --chain kusama --name validator --validator --prometheus-external --base-path /home/polkadot --database paritydb --telemetry-url 'wss://telemetry.polkadot.io/submit/ 1' \n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"systemctl daemon-reload\nsystemctl start validator\nsystemctl enable validator\n"})}),"\n",(0,s.jsx)(t.admonition,{type:"caution",children:(0,s.jsxs)(t.p,{children:['If you installed as root you will get an error "failed to create a test file: Permission denied". You can solve this by running ',(0,s.jsx)(t.code,{children:"chown -R polkadot:polkadot DBDIR"})]})}),"\n",(0,s.jsx)(t.h2,{id:"restore",children:"Restore:"}),"\n",(0,s.jsxs)(t.p,{children:["Best run the commands as user polkadot (",(0,s.jsx)(t.code,{children:"su - polkadot -s /bin/bash"}),") or when running as root do a ",(0,s.jsx)(t.code,{children:"chown polkadot:polkadot <dbdir>"}),"). Of course change the part after ",(0,s.jsx)(t.code,{children:"-C"})," to your location."]}),"\n",(0,s.jsx)(t.h3,{id:"generic-command",children:"Generic command"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/<link> | lz4 -c -d - | tar -x -C <location>\n"})}),"\n",(0,s.jsx)(t.p,{children:"For example paritydb kusama"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n"})}),"\n",(0,s.jsx)(t.p,{children:"For example rocksdb polkadot"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/rocksdb-polkadot.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/polkadot\n"})})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},9735:(e,t,a)=>{a.d(t,{Z:()=>s});const s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAEsCAMAAAAM8ycIAAABOFBMVEX///8AAACgoKD/AAAAwAAAgP/AAP8A7u7AQADIyABBaeH/wCAAgEDAgP8wYICLAABAgAD/gP9//9SlKir//wBA4NAAAAAaGhozMzNNTU1mZmZ/f3+ZmZmzs7PAwMDMzMzl5eX////wMjKQ7pCt2ObwVfDg///u3YL/tsGv7u7/1wAA/wAAZAAA/38iiyIui1cAAP8AAIsZGXAAAIAAAM2HzusA////AP8AztH/FJP/f1DwgID/RQD6gHLplnrw5oy9t2u4hgv19dyggCD/pQDugu6UANPdoN2QUEBVay+AFACAFBSAQBSAQICAYMCAYP+AgAD/gED/oED/oGD/oHD/wMD//4D//8DNt57w//Cgts3B/8HNwLB8/0Cg/yC+vr7f398/Pz+fn5+/v78fHx9fX18AnnMvLy93wofgAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAb5ElEQVR4nO2dC7ajKhBFsafhfDIOULxv/jN48pUYRVQ+ZXL2Wrc78VNWgBMKhQpjAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMSa5/y5E9ufsnj0egDqIbkaKIfHwiECGKXiDBg++A6HaOO+7RIVEBDJBIOD7EKaNC8HkIDrGOtWyJ/Wul53g85v5f6nkw0Uney8J/45PZr/qikb3hql93cSX3WycD9AdlbOncVtlP3YavhzgzwCgGYFAdKv0Apn7AC7nTqHvRjaoDkZIznsp/Xn2nZhVNMzHMDEFb+bT+SjDLcrwMLd/b0/jttoeZ3ZjOcDtA6AdS4glhXrvBSLM/3aDZFw3aieQ93dMS2EK3ujT+27ZwpVIlgt4M3arEUgveXjBscgnBuAEepBuohzdwL1A1P+9ZKNupkNnX7iW/f7O9B5T8EafPrqvf71ljqL8iYOXjtnqjh/DA9w+ANoh/DjbfIl/CsSODUyw4ySxvFODjK6zAvFvfIP3W7gZWnh7xo7dqo/n9iR3AH8brQDQgmOB2G/xnR6E65G87UGWN64HWbYwJZ9uHD8CJ7VVHy/EYjncB0A71gLR/8pFIMyNp3fGILo9c9uDLG/cGGTZopnP2rihrAZA/Xw0d+/e9wHQjrVAJn13KhBIL1WcNO3dxeJzlzMK9eU//y1v1C2xUY/N7ZZxNmPuYjl7Cr9V3ea1UnAH+H0AtGMtEP18ow8Eoh9L6Ccaes/bcxD1bpCdmAOnuS+R3ejfdP3U6ecgfstsZn4V2NO4rVIdrxiWA/wZAAAAAAAAAAAAAAAAAAAAAAAAAACNwGJp8HuYVT9qAlzfmRlFaiV0IIVhPkJOmNcDfhO3mI0LKxC1EnrsvEKEHOb3WFsAfhTXWQyjWfDDZj0EC0LdSoNpQogFfpGg1S/dxiIQOW0eCsCP0E3CDTkWgXCnBR6IBgIBP4iYuF6/xgKBcLPEmbnloRYIBPwoZnWmEwiXTh+2BxnUja4RAgG/yhgKZOzCcYfVCl8JpAPgEdzVhlKGzeNnn4OEww6dzHJTIKGNbuf1/o4rBqpZu3n+BWMZdzTwK39dvjK5+fn2NLzTY5Alr9OS5c8wdT1nfJCS7wvkCrcNlLNG1RhVvzLX5UuTy9pt30axZBif4dz2TNwdMKgDhEk7nvG6EEhLU1QF8rLyICSQVtf9l8OLMtaoGqPqVzZbr5BMNiGQ/NaoGqPqVxZbrxUZTGoeKxAAFtbygEAAsHyKI588HiwQhFgtTZEJsbbUkVEeEEgJa1SNUfXruq1NeeRtGY8VCPhxivcdBggEPJBNcRSQx4MFghCrpammIdZB34EQSwOBtDTVTiDHkRUEAn6U15Y8Cl8TAgEPodKofMVjBYIQq6Wp2iHWpjh21IEQSwOBtDRVVyDn+o7nCiTrdHfwG5zpO0qQo6Fy/QPFo8tu4l8YBrGVWRECAcc0FociR0OdOmlW2uqVhf6FYSezIkKs+sao+rVn66I8yIVYg1S/2T2p7AzjGLzQ7GVWhEDqG6Pq15atG30HNYHwblQC8QmwwkxY+5kVEWKBXTbFUTm0ctxvqHOznwXCu3msodTgX2h2MytCIGAbAuOOkNsNVUVUWiBy1BkW/QvNbmZFhFj1jVH1a7GV5ZYVrRBLp4zTAjEpFJcXmt3MihBIfWNU/TK2sogjt2f3G+pks/z0uqtQcvEvNLHMiv/mj4I//Km/PXm09StHZkWFGqTrfHGq4/AvzK6UzIrgp9kWR8NxR0g2gYzdYIYe/oWhVGbFf3cNlLNG1RhFv3bEcUcdeVtGNoGwwf004bD+jcIimRUhkJamshjbE8fNvoOgQB50XUCDzaUddAKrBQgE1GdHG+TUwR4sEIRYLU3dMFYmrsrh2SYQSH5rVI2196tKYAWBgEeypw2KgdUCBALKsxtW0RaH4rECQYjV0tQJY3viCOIqwnUJgRSwRtVYdb/2tVEykxUEAugT0cYTAqsFCATkJiaOCk8C//7YXz5rjxUI4W6ZqrEafl0SRz7HZm1YclmEQPJbo2qstF+7TzmOeo5Mjv2F5DH5YIEAWjSNqlbiyKkQCATcJqaNCur4FMdDexBMd29rrIhfOTqOG45tioOaQExmRdbbDCa97OSw7C2UWRECaWnKGNsfdFRx7G9PHtTuYpnMisIKZJIjG5ZEiqUyK4K27M87rPOUY7fryCgORbbMisPItEB4p3qPyeZqKJdZETQjdreqigO1xKHIlllR2VICGHVf0Tu7xTIrIsRqYSp6J7eKY8fioDbVxGRW1LaWHsR1HOUyK0Ig1U1FtHGv50h07C9t0EFMIDazora1jEGkF0gwXEeI9WAi2qjynGO368g5It8gV2ZFbcsIYJLdNLz1ICUyK4J6tB507IdVZcWhyJZZkXmBKKxkHpNZ8R8BH0j+vf5F4qoaPkTEUb4uc2ZW9AIZ1CBduLF5scyK/+4aKGeNqrHTpmKDjpwfcs/WtZ4jb8vIL5BJcj9GZ+UyK4KSlLlbdYaINsrHVQH5cvOaUIvrMYgIHgsWyqwICtFeG7FH5FXFoXjsZEWEWCVMxYKqYn6927o9ICcYYrW4LgSS2VRMGxt9RxGB3BZHbs8eLBCQkZPiKMG1AXl5IJAfh4A2yIpD8ViBIMS6b+qOOHL5lf8ROUIsDQRyy9Tr8gLyjH7ti+NO1wGBgFtQCKoY7bgqAAL5KSCOszxWIAixTvKKTqs6rY3LfkW0kUcdCLE0EMgJDgYc1X6NvMoqcggEnKCANi7ynLAqBAL5ZuLagDgSSGqonDM2Cj3hsOp1YyDEihPTRo6OI92vY3EQrsuUhspl1028E2KduqfwdeMQLtTWxkprI92v/VXkbz0H4bpMaaiTHAYpesZ6cXxwDEx3rwGRoIrMgo6bJDRUOdql51xu7OWT7OaWzzu3HsRu8BTKrAjWWA3syqMiZR6RNyGhoXbv/6yQgs/ysYJQKU7eNpTLrEi4W65vLBpUeXFU8mtfG3viIFyX9wUycqaiMPNa9TPhhoKZFQkXalVjadqo5dd5cWR3jJpANDbTqOhXGwpmVgSH2qj8U4BfMuhYkSIQOWP+2TnC5qoefKoGn7y6XGbFH4eWNkitIs9LQkMVC9v7u848IXEC8BtKZlYk3C0XNnbYcZT/KcB3Y7c7DsJ1meebfNSB1Ljk+hldZFUusyLhQi1o7FAasc6jgF/XxhxFHWslkHEc+e5OHVz1crVB8ZDMig/4O+42KvsUFUf78srxl5hZcZxMi958DNJzpwfTawQbFMUyK/4UtAYc7FELOm6S0FDHTguE8/CH1RxcTnyOqFQ/0Q2rDZpSmRX/3TVQzlpWY7fXxmb3K6INEqvI81pLmWoy2QOHrUG6fnA+a8KPx/0GS6HMioQLNZuxfNrI49dfZG4VnVXk1QUyf/ebAzenmpS77k9DZxmHIxJVfV1cFZD6oJANaQdnvO6vQk8b7JcGHStSBMLtC1I9COFu+bqxuDbuiuOqX8W1Qbgukx4UurH55hik3HXjEC7Ua8bKdxwX/Epc0FHfsWrWEhrqYAYhbOw27mIVvO7vcKSNRlFVq58FJEVKQxXd1A+96KbjQ7Ne9xc4CKoaaeOL51adJamh9lI9JuyPD8x83RiEu+U0YwcPOJw4MnqWaippyJGzxAjXZWpD5SpvQ4Pr7kO4UA+NJWojt2cpppIH5BBIWX42xDqhjdpExPFjcVUABFKPw5u47bSBQccejxUI4W55w9hxUFXBsx1T16aPIMQqyw8J5F5QVVgg+9o46DggkLL8Roh1+ICjYVD1w9NHzpCWenQSUlP5ug+H6nhDAXEkktRQhZx6zb1r/dJ098shVUHPnKmINtLVgRArPIjv73OJFJeEiqOokVmRcKFGA6uGnv2Lzq062XVAIAGx0MolUhT2f52nYZTFMytShWxQFb1bhbhqj7SpJpFZiiNnOpHiYP83OeNGp4dimRUpkq/fyA60cZGkhqqSu0fHIC6RohLI+5zfYpkVqXXLpcSR4XMWEQdCrADp2NnvEilyneZ9HnR4WZTLrEipUEt2HDc/Z5YBeQG/itki+BzEJ1LkKvUi7+QYJo4L+pOvDLF2R+SN1sYGYEFHBjJmVuQ614/LpWj2lMusSAKyg46YNiCOMxw3VPXTUo69Y1SeuNEuqNJ9hk9D+pDMiv/On7MvjtafJzbmaO0bzbrc+0vKrCijYxCfSNGPNsTElh6kXGbFf3cN3LEW7zmyunbaWEQcTf2qZCu3tbsN1SdSFG5crpauj8vNq1KZFRtCdtCh2RYHuMjthmoTKS6/UciG9W8UFsms2BCK4rCPyDfkgQH5LR47m7ddt3w4Iq8cyiRPH0GIdQEI5KS1hNtVFRviqekjEMgFHiuQeiwasIIgcy83XRvgKskNlTe6blPcSlnmxbFsb+eVIiIOyCMnaQ11HnfPBwa/aVDpuhEqdMtHodQpY1f5NBbVRkwgCLEukDabt5vUgw2RMbUiaYG8PoYaN4xl9SymCvdPC7/o2GoiEPXTUj/z+yB7j/+aE9VGa+e+lrQVhcFfzevWZ+8ZYGvK/LITOCatBxn1gSOlHiR3t/yKpK5q6drB3KqWfpG01WgM0o/dOORMX01KIHvCeF1bKZvTtVziyO0XBPJGr6eR5EzvTiXEyvw7mVmJDTraevZDpDbUcVznJalz3aLEtNFYHZFcuU39+jnSEsfZ/4fK141xuyONSuOWOu738WXEgRDrAml3sQRPPzjjdWNcLoaDPNJ3/brjmiHbmCOzX+WMfYFA5Jh8cMbrFiCqjdaDDkUhcYCLJD4H6fUI/WarbrweJK6N+v6s2B91gIakPigcVQbFrYNtytFgwVQ/bwhGKyRSj8bEofqN1tHH/qAjo2etP2QVW21CLKZy+nTD1sFC2JSjCpVAbprDsWHJNFoq9ej1FRxbXUfLtrM35vjL7RkEcoFkgeiHIRv7fMpRZnKZ8E71Hi7VYuvUo5Qfcyji4gDtSWqo9tt/3J3NawUieiUSdXTv7BZLPXrEa/9uFSMhjthK2da+AU+WhspN0x9Ub2F6ENdxNEk9Gh9wbEqj9jLy9CkkCLHaWsuROE6nHGVOAHoMIr1AguF6BYEcaGP3blW9thPNebjxKBACaWvtbuI45lKOLtkUJ6nWV5nXNVOPXug4apPcbwAq3G+oLuUo6wP9+NfVUo/GtPHv1Tod5vwXEcdfa9/wt/2XlHr0gGWUYcfjgxqk+9W55VOPXv4F8k1rOfgwFtVGvZ9bLvshidjKbS2loY4DU31C+PRvYVmo3pn9k+R+jM7KpR41xXCgjOS4qlzbiWojIbCCQNpaS2ioOoYaukl0GwpZnqBzt3seg4jgsWCx1KNRbVAfcmDQ8RASGqruI9Qjjl4cHpvzujEeoA2MyL+ChIaqwyX1D42sJkW0kbVbzqoNhFhtraUIhLl8Dc2nux8MOa6Tr1BzR1UQSFtrCQ11Hl6z3vzGWtXrrqA+rUqDqOrbSBmD9CZ13Dzcrnrdhag28vl0G2jj+0i6iyX0M/Rh6y5WwetaqvQbebrlDW3cVgdCrLbWUhrqIHTa6i5jat40gRQbcnyQpVDX2sjSdUAgba2dCHV4xeseDDioxFWBBhBWfScUf0DnEdpggRScIiCO74OYQKJB1VtY1bRb3u0u/i4Yy+pZJVMIsUqzcd10cSgaFupRNEW1IVL1CwI5vO45bbQGo40forlADrRBQBxrCWA4/ks0FMiRNOLaqNMt22lV7p27fxuXB9VQhqpfCLEsb9Pd7/YbNQo1fKbxoZP9zoNqQ6Tq13cLxGZW9P8vLyxbmRVfr4hA7nqUh2gchV8h+BluC0QIk1lR2v+XF3b/VmbFPYHcdSYPn2s5WnsEmnFbIC6z4mj/X15oNjMrvjYEcvYJYKFueXstR0PXEGK1tZZnDOL04DOO+hfbmRXfBXLp6Xj+Qo1krGroGgTS1lrOzIpLzmr/YiezohcImZkje9pAfPXj5BCIzaw4D8bNfHj/IpZZkYw2sHgcRMggEJdZUS3MnVYvymVWvN+R/sUTK1y/UUU1lKHq15eHWGOwTmRw+bD8i2qZFU/+xZShhdPQN/zd+vuXz1bGzIq850YX/oXZXSyz4i0O5AGA4/5zENN/cDlx9TttywtLqcyKV4lrA+IA79xtqD6zon6Arpbm+heWQpkV/50/pZY2LrhWxRhVv758DNLouueK4UAbf2TbDgTS2NpjBZJMtNNAUAXifLdAMNwAN3msQGId6cEDjg11kI0+EGI1tvZtAknQxtYTQLJtBwJpbO2xAtnkijYAiPAlArnWbwBwxGMF4jvSLNogG30gxGps7ckCuTje2LGWD6rGqPoFgeS/7rEuEFSBHDxOIAl9BnQBsvEkgRxq4++yNshGHwixGlt7iEBStHGn5yDbdiCQxtboC6SwNACI0SyzYsoJx7qANkBZMgikN2sKe5dQcRSHmRWPrpvxBm4aZKMPhFiNrd1fciuMQCY5moSKag3uKOOZFSPXTdUG4UKlaoyqX5TrMkNmxZFpgViV2Jxxo9PDZmbF7ev+JWkDgJrkGIO8C6Qbwn3bmRXX1z3UBbQB2pBNIL0KseSgUsXNYxAni53Mist1k6SxpQ3C3TJVY1T9olyX+QTCpq5TGbJ4p5XiE8cF/clKIJe1oSFcqFSNUfWLcl3mE4gQXOvC5VI0u/YzKx7pAjEVoEAugYz6NpXKF6f7jNEljtvOrPj3FxGInkxFIEMf/n7+L0dmxQ+B6ExyrgfZyay4J5ATEw3/ZXC8kDWqxqj6Rbku84VY6oeldJr3sRuWMch2ZsW/DYGcfe5HuFCpGqPqF+W6zJB6dJ1ZkQ3r3yj8zKz4LhCs2wBkaTNZ0QukydUBSKbZbN672iDcLVM1RtUvynX5gOnuOxAuVKrGqPpFuS6fKxAAagCBABDhsQIh3C1TNUbVL8p1CYEUsEbVGFW/KNflcwUCQA0gEAAiPFYghLtlqsao+kW5LiGQAtaoGqPqF+W6fK5AAKgBBAJAhMcKhHC3TNUYVb8o1yXtzIoxCBcqVWNU/aJclxkzKzLGpdTvZSeHZfeVzIoAECFbZkWmFg8qgej8P51XyNnMigBQIltmRbWSsFcCkSZLlt19IrPiOQh3y1SNUfWLcl1mzIvFu1HJwmRvWLKaJGVWvADhQqVqjKpflOsyo0Dm5q8EMmhpjD6ZyUFmxesXvWugnDWqxqj6Rbku8wlE5aw2AlGbuBdIMFyHQNoao+oX5brMmDiOs90eZCuz4p4TaTuuGKhm7eb5F4xl3NHAr+Z1GfmY2QQymew/Xb9kkNNsZ1aczwHgEWQSiGa5izUtd7G2MisC8EO8C0Q9BxmWocdWZkUAfgZhOiKuXvfbT9I/MysCAAAAAAAAwMMIhznErFE1RtUvynWZ2Vox/MDfTR3m5sGk3sq74EbBbWsfdxkuGVsWAfTdiXsTB56dMRY3pX+tIt2xuDFzo2aKnJ9sq21d5q3Mirgp9Mvc+l6sJ9ZPIpO1Sd+nXi9gOWfMvwtWA9z37IyxA1Pq947GXMZEqjYSbGka1WXeyqyJm0K/zK0X/Wpi/Zj+pRO3ZqaPJVfRtjH/btl837NTxg5MjZwFj3NvGjt1/55wXeatzIqEU+ith924mlgvkj0/sGZe9IlTDLaNMRY8Pk0v04TPmWospciSW86RsTMCIVyXeSuzJuEESOPh2K2mRQ7pXzoH1sy3Tp9ob9sYY5fKNOFzphpLMJUeexwZ6yaRPKAhXJd5K7Mm4RR646EKDd8m1p/4EjuypuNWmSyQLWOMXRRI3LMTxo5NzSPr1NHrkTEx8fB3W2861qwu81ZmTT6VrUPDYOuJqPXY2iS7KfVbbNsYY5l6kPXnvNGDfJhKbtNJxlK/9wnXZd7KrEk4hV57qEUebu1Th5tJ1k4Y3DbG2KUyTfDs3Bjk4EOmtpwkY4ntmnBd5q3MqgRT6LWHg1xtTf0uTLE26AAk1eC2MXatTA8/58m7WLumeM/ZiWD/wC9tJXUoTLgu81ZmTYIp9NrDaVpvPfO888DaJHn6uG7HGLtWpoefM91Y3BSXetiQev/zwFinjSV6Rrgu81ZmVewTTje33j1Xds89+alCPbI2x60i+dnStjG/CECcezAc9+yUsbgp/SR9SnXrwNgozjyvJlyXeSsTAAAAAAAAAAAAAAAAAAAAfCebj46ns+uHtgzURbm77fI5X8qUR4MC+TWELuHh3APa4HT18NRkvvtg+Jjl89EgYqdvUbg9bLiTJhD/UaMf6KNAPgVCrECAEchlfZjTeb95/pQgkMjpW5QWyKc7aQLxHzX6gT4KZEMgtAoE6Box+QDMBDShJg91nfoO0zOS1B45TF3X88lk1pjCqUWmA2JChEeLTtW7+jIchZ7xN1vlalmdaRBqFQJfn25O8z7IoZedUEf5+VHOQOHCsO70Nq+JE4jOVjCtfbFH6Y+6tvBeIPNh6qj/4uURnG+KsXGBAFUjNn+Hr4vOrqoRc33ohadyrpBeTWvrw63udP2feD9aNyo1kdouHxjmAznv1Q/9StlzvxgpFIg6bWkP8/lcHaUS4OsOzhsoWxjWHbXYbnTi0L4oHbiP6HzxR4npw8KqQOxRB+URCkS+fWu1KRAwF7PLb+Pqwq+D0ag6URO/ucrs5HfJnZDCHe0Foqdnz63CzELVDULtdssjgtP19qU9CLaoVa/R8Ab2ed0risAdt1zbCYQvyzDmV86X5SixF2L5AnEyipdHcL4pxnsF8ne3QADT2eX1q/DLapGIcD/Aq+rDC0S8DUo7P6jUR+t9TiDK4PxnlqP5mNtn6FhO16ctPqgXvfTL2AIDe7wUNwvDufOek2QOF5e1IfOncr4sR+2Vx1IgTiDx8gjON8V4p0D+FPcKBMw1MvJVXXCXx28OjnVKwDeB+K3mdF9B70d7gehGNtjQImgQ4+p0e5HP9mBXGSwG9sghEGd+WX+tBdLp37j3H9H5shy1DrHCo5kfy6ij4uURnC/f494LBQKB5MAM0t8aJ1OVO+tGjwnXPciy1Z9uzng/2gtkfqGyw+z1IMcCsS3n4wvzlcjZwgiuNrgeRIwmwLQf8b0HGd56kOUL471A/EglWh4pAtkrkL9EzhQICG7zmnp0sUQ36Brg6x5k2bqcrlgdvQikF9PEWGwMYvDNSB/hcwm6aP445M7Zg6zHIHq07T/i0Rhkq0C8QKLl8SGQOwUCOeTA1MiksySpuyJzeCxHO47s2SiEYKsexG0NTmfmF3uDo7VAhNlhEk0td20Gtr6LZU9g3oelPaiF0Fw1qcObNjkFYu5PdctdLO2Z/4hvd7G6nrHP8lgXiHRHRcvjQyB3CgQCyYG7rziXtrqvbpIbd3qp8qBWLI9z+P02BvFbw9PZ+mj17yhtU1DvjXX1DdhP3fo5iD3BHRW2B33bXx3uDeyT5y6WYf0cRA3U/Ef0vrij7Ed9s/BeIPpZijT3iPfL40Mg9woE8ngC9yYbfR8oDxDA8az3DZQHCOnN9AhgQXkAAAAAAAAAQBH+B+GJxz6GaL0mAAAAAElFTkSuQmCC"},1151:(e,t,a)=>{a.d(t,{Z:()=>r,a:()=>d});var s=a(7294);const o={},n=s.createContext(o);function d(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);