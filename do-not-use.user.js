// ==UserScript==
// @name		不选课。哪个大学。教育网
// @namespace	http://tampermonkey.net/
// @version		2025-02-18
// @description	不知道是用来干什么的脚本。不要把第 7, 60, 63 行的 DO_NOT_EDIT_ME 修改然后运行这个脚本。
// @author		idk
// @match		https://DO_NOT_EDIT_ME/xsxkapp/sys/xsxkapp/*default/grablessons.do*
// @icon		data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAIAAADTED8xAAAACXBIWXMAABJ0AAASdAHeZh94AAAAEXRFWHRTb2Z0d2FyZQBTbmlwYXN0ZV0Xzt0AABtjSURBVHja7Z13fJbV2cf716vWQatFq2IdFVHcVmrFgoq4SnEVta/iABVnqVsL2XuPJ3vv8WTvPSAESEggkJAQQsJIyCIBwpTd9yB+qK8ITZ7zO+c+953r8/n9nVz3ua/v/Zxxnd/1iyX/Y0UijVv9goaARACQSAQAiUQAkEgEAIlEAJBIBACJRACQSAQAiUQAjFs5Xul0qvrfKO3POkBDSgDoSYFTg4EAbDVtoyElAPSkpCdSgAA0/msdDSkBoCcVv14CBKB8QQUNKQGgJ9V9UQ8EwPxsOg0pAaAnbfbaAgQg9L5wGlICQE8aTt4NBMD1t+40pOMUgMH4IWAmMTlf7So65qzns09WnUIFXPuPlUsuEhVq5B+jscP7YzXZbCAAeFX/VQP2rbBXLjpm31v9gQF3h+4UFKfLNW47grsFZX+rc5shf7hkA5D2lwzsiyl4tVB0zHF/jgcGvMGuWVCcqU+nifv8Z8zNUiRlfW7xS3w8Wa8AeN3og30xDd80io457+UCYMDV7y8XEWTA1KBdicOCsj/r+ZylF1mrkP1lb1f0RffXLl6lVwBsL7fHLih7wnaKjpnN2qHJlK0+pT/Wzohe9tHVPPU9f+c9lDh8ouIkC4k9rI53gRr/tRb4ejq8O20utRMacKtLm+KLlpiHY/dl7BcEQMXCSs2zv+j1Esbh2ZDYpFTHAGTOzca+IdPtgUID7o8ZAEbLvmTwCMsXVAjKfjZhYz/aGqa++/WebPyPl5/4cVS+v/fXMQDs9xT7koQerEZMizpedgIVapvrJqtLbLARmp9JP5z/nSAAYnHfWguU/3JBd2jPT0LqjeyzucxOxwA4/cZlb9oI8CUt/7BG6NQTGCr7mMEjZI8vKPsDpwZrlfquv3XfGd57rOz4uVGxlYDuT4LXWa0Hvqd2j83iQsUeLbHlBDa83L/lHyk+KiL7twVu97zBS5P0yH4hd3vQDjmvWxsAsl/MBb6qkvmlQo+BgaGePgaGhrfyn6sFff5L3yqXnxjOE113BHcfLTl2gcBWfVanewD8bwvAvi236zwEhcpWgcA4gft3Z4q0j5UeF7L2XbQMOM8epdLnZHb5b/vvR59/L9I9AB6TvPZlIrftYqbHCQp1g10zMM446Jpy9ed1gj7/cTMS5N44dd5q2jbKuVzCo4lGqAbFJlbR6yWC4uwO3QmM0/dW2P4dm6IAt6d+rJB7w2RmQurTaVt8Okcfnv+UACMAgD25XLu0Scgv1Q1e3xUeQQU5ELcLuKde9+UaQee+3jf7yskB+wmOLPXHNMJ7zHvtrnAwAgABdwQBX1tvZJ+gzThgkMPJu9X//Fe9Vy3pmvWs5M2eHWMNb3fqXoNciPGbbDqYewhXY9wj4sAy9L5wYG5t9tqi+Oyf/Vm7CQ6iXz17U+0emw/lH7ao8mWLQQBg2ujUCnx5QXeFwCM0P5sOjLDui3pUYczPnhDxi03HRb/0+BkJba6bLB/DL9cYB4DCvxchC9b/mql4jU0xaKVeu3iViOxPmpUi7qoak/UvbVtd2jh/9ovRux1aAhB8dyjw/a34pFZA4eo6ZIY9kcIfUs5LeUeLj8Gzf695JHBqkLh3Hf1wbItjK4ZSwwAQck/Y4QJYFRd8dsi01bQNmGSQ0pplHywXNPsX9JatLrZptm/Zn3UAEmfAHUHGAYBpk1s78PAS/guOem1n5HilE//OCfCT8eP7voK8BSKmRa23hR34HCk+6vBrJ0MBUDK/FPgiPaDFWwoa4gqq+8+HFmicVZP1+pGMfcA42V8zmi9Q2P0Ryh7gq2aIG/2nGOwv0g/LyvmlbHmKfq3h65Y2wUPt9NtqNADY2gi4pCt5owx5UqOYIW7+K4UiPv/sFWDfacM3jWxJLSJUEQYI2jvDdeBcB9lvLrbWUh1DXJ9b/Han7IGn1EanVuy2nqADih8qtN8sMyAAwHkt9r6VUoa46XMy4fk0EDvo+3uY3cPqz+tEIPpjpTxpNiAAwCtXpyulcCf56hjiulzt1hvRB8+nFaDbOQF3BJ3em6r6t9DsF3TYrz0AybNTgXVd7FcYFZg6hrhYa7ozanbY6PQbF/5RWvFJ7ZAwQ66fCBKwcgAwdfltRY1R5nMY2ymlDHHHVC4v7W6a32TT/qwDwFG6sAqhF8HUAqDqvWpYqi3G/KyrY4iLLRj5wevqnSrrS7m2PqsXLRuM2yUn9X+4pB+w3bAAxEyPQw0T+1hCQlLHELfJej1+NTk7lWc/ao955GTlKZnZf/rO05J1hgUg+4WcM56P/Kr5eAXExlURQ9yKhZWokTmrtGczLB6i8gUV/dEDklNfaGM1VTrEXMAHRhPvQUUMcRnP4Eyq+nfkNEvMST1v/I83rSYyP5NuZACA9mbxMwEFESoY4iY+ngz3PGxz2WTZmeBOAfuwKlzVVwWA+JmJSp0XqmCIm/8quPbhQM7BsRb9u1/vORA7+BNvWk3kco2bkQEoeaMMtaG2nruVlQqGuN43+e5KAPdTG+vIsLXZud60mqhq0TJBiadQl8ie8F5QQcQgZyQqGOKy+Q82h4aTd4/VlUjE+YNl2hHcbXwAUFdd2U82Z0GECoa4nb5d2pZSOl7lfCD7oCIAYMscFQUgGVd+HHwPV0GE5oa4zfYt2ATqjeof6zrE7VoPRbKfqfLdKuMDUPNxrSIFEZob4q75GtxM1gJHlqiHYtQBIH1OpvEB+H7vZVCFgghtDXHZ0vPC/uBjVd/YP//f378pUAeA8AcixgUAqBJ8zoIIbQ1xS94o0/zzL857VDX7e7UAQDmx9ccMWHzar60hrt9kE/ZaSX/0gGWnEFhLGC7Lli/qxXUpVgsA4P6jxQ4R2hriJs1KwWZPvUVegt43+4rwX7FMQltBqwWAzWV2qGsoFjtEaGuI2+GNvIY2lDRsmdc59iREw1panQGwBNdG22KHCA0NcbFOjDxtE2IF3EGTX0urSwAyn8vW9uhEQ0PcVZ8iO94dzD1kmmJhC/Gi14rVAQB1y08fAKCuYvVF9+vLEDfhsSTstLvF0XLLk8Zv16oDgGX123oFwPVa95EMQP+83og+2yvsNd/9GL0hbg60dezJylM89cM7QnrUAcBDZLti5QBgQtmpWuaioYkhrv2vHHeCagF/OAnxtvwkJPT+cOxJHFcFq23z0outxxcAefPytWqZoZUhbvgDEdi84enH6nOLnzqff0Hd35QGIHAqpn+eBS0ztDLEXbsEufDIfSmP5+Qo8fEkdQBocdw47gAwTQk8lHdY/h68Voa4Wc/nHIU2fOfsFlX6Vrk6ACz/aMW4AwB1Jbfs7TH7CGhiiIvtlVa7eJXNpXY8g89jxNLwTWOXP3IXIefF3PEIACoR3a/3VNwQ1+Uat4HYQeTJw/xSzsFn024L/u/h/O/Y6tn2CnueJpA/497+p9jxCEDY/Zh6hJjpcYob4mJvn3X6djlN5DLQTHwsyYIr8OxHI+LByB9q2qHGQV43+YxHAFjiQnbiil4rVtwQd50V0viNv9edaUrAmP7jkeKjkdOi7Sc4nnWKBq5nNnt2wLvX6AMA1I3sMfnpyTfEzX4h9xguXQ7lHfabbOIc9pQnzWPYonHYGP2nmP93kfI65EVKNjkUnWbqAlD5ThX/CO4M71XZELfgVeTyd5Nbu7RhZ9Mk9it9bs9GbC1tq0U2XgYBIObhWMicePRbIpINcR2vcu6L7gf+x9hH4vmHvdlh4yicjtrPV22e+pQZ+ESoFh66BCDnxdwTlQAnStPto62IlGyIiz39LXq9BFIy8F9NzxMeTbxAowps39u8efnjF4DvS7K6ZZqqSjbEbfimEfjvChD9I9hH5wK+5x2jOFjE7iNDftN0DMAKREaO/jqFTEPc5NmpR4qO4roidEHaBwXdFXK+f8HmNqPpJt/usRk4hj64Hn66BIBlCcSaU0FD3KznczS/+Huu0v6Sce4f7/LfOvp2MsC2Md0hPZxH2roHwB2xp7bHPKKgIe72wB1AAALvDIYM+LIPfuoIljk3y/Xa0bb3C/9DJHAMdyUMScgxpQHQqSHFKXTHYmlqc/lPFcP24G77XzmO7YM1yRO5q+u+mQCQJxUMcTXXWUuivHn5Yy2jOl3AAt3XWvnpagJAnjQ3xNVcFQsrzxwdOk10sew6gfkZpKFGwauFBIA8aW6Iq7lC7wsver3E80bLO6xhLxLEz0wkAORJW0NcFWQ3wYHTgbD+K6Sptd9tJgJAnrQ1xDWGgMXkQ4nDY/JUJQC4pK0hrmG0K3EYNYZsOS4nZgLgezMiTQ1xjaH4GQnALsIW3OcmALjWfxoa4tJBCqqnAQFgoTQ0xDWMIh6MQha3jvEqHwHAJQ0NcQ2j9DmZwDFMfDyZAJAnrQxx6SNyPgXcHkgAyJNWhrhGEvB6w6G8w2MtQyIAuKSJIa7BBGwrvzdtRFrYeAAcoP6yJLhGb9mrlaNMp2+XjgFAWduSBGn0lr1jKoO7wF3KsWrN1w06BiBpVjIlmcoak1fSKOV9ky8wQov7uykBgFLtpUjnqmJhJfylRz2EvE2RPDtVxwCs/ryOkkxlpf0lA/7SM+dmASMMujNYxwC0e3RQkqmssAci8JdpEDZ+/9lGu8pZxwAM4UoCSSLkdp0H/KUDO9xIMMMSCEDqU+YTuN0AElxrvm7gvPXys+ry26ryJpU8AJTqr0b6GbfgiF4RabTHvBfXV2qtjgGImR5HSaayWhzwPedyXsoD2spb0NhKIQDYWFCSqSwRPed8fo/82U99Ok3HALDxpSRTWewLBc+haISR/VmF3BOmYwBaRuEuT9JQY22aNjpLJaTP6WgseNUFgK2xKMlUls8teL/lqkXLUOGVL6iUmf1gAPwmm44UH6UkU1bdoUL8ltdZNaEi3B60Q8cAYBukkeAaShwWcp0oYDsqQsaSjgHAeqOS4Gr36BCRQyMZ+2CFeu9U6RiAn22vQFJH/F2Ez1XJG2XACNMFFOrJA+CMvTBJWYnwGmELP2Sh3v0ROgYAWBFFEqGkWXivkdhHkL1lR9+NRkUAsN4KJLgCpwbh6yBezIU1VVi8aslFVjoGAOutQILLQYBdxbltxXh2aeWbWYxfWxSniS7A3JLp5KGU1ttsQI3hettmAkCesJu2gnYY1df2IFi7y6pFywgAecJWsKzQYVMwzLw3+yBqDDPnZhEA8gRpQ39WDKdxOIbLPqgBjmHEg1EEgDxhL++LuGmuvkxTAoBj6D7JkwCQJ7ZsBb48tqQeh2MYNyMBZte1tGnpxdYEAG0B6Um58/JRY9gb0afJI4xTAGgLSLULgM0CLisTALQFJFYb7Fpgl5U/rCEAaAtIZ+oO6UGNYfYLOQQAbQHpSXZXOBzMO4waw6iHYggA2gLSkxyvcgaOodeN3gQAbQHpSQF3wDqhtLm2W11iQwDQFpCelPBYEmoM+2MGtHqK8QgAbQFBlP9KIWoMNzq3EQC0BaS3YfykFvYR+aSWAKAtIJ2pxRHmApj7tzwCgLaAdKaecJgLoAjDRoUAcPg1dQ6WJEE9gM+VyzVuhwu+U9mwUSEATLcHUmrKUZe/pPYqzhNdUTFvC9hufamtkQFIeDSRUlOOGr+V1F4l6K4QVMyD8bs0nMj9Qsp+WQGlphxJa68CbIe+ya3d4ABgtx1JKrRXKfx7ESrmlf9cZXAAWhxbKTXlSFp7FZa1qJjzXyk0OADUNUOapLVXaXVuQ8UcNyPByAB43eh9pIi6ZsiQzPYqvZF9qLD9JpuMDIDLNW6UmnIkrb2K982+qFZAA7GDtpfbGxmAkHtCKTXlaJ3VemmnYKiYh5N2a3ueLRyAlCfNlJpyJK29SjDuo7bZs8PgABTPL6XUlKP0OZLaqyTPTkXFfLTk2EjGPn5ZbKsoHIC6L+opNeVIWl1q0Wslhun9IRyAdo/NlJpy5HathxwAVn1Wp9qzh94XrigAg/G7KDUliCXl0oskWQu2ubar9vgW36kXC0D0w7HHy09QdkpQT9hOaQvH/pgBpZ79UP5hi/dSxQLg+TtvSk052mAnqb1K4NTgY6XHlXr2AzkHFd0FingwilJTjqrfXy4HALfrPFR79p0RvYoCkD4nk1JTjjKfy5YDAFtuqvbsPAXVYgGg1tnSFDktWg4AqU+lqfbsa75pVBSAxn+tpdSUI48bvOQAUPKGciebVe9VKwpAl99W1EPuy9jP5eQ6wQE44pzBwI012QrY6mJJ1oIKnmzyuKqIBWCvGWZA0unbxVXAeJMvcMQ5gzldTnM3skawN6pfoquSciebiY8nqwhA/isFJ6tOoR6y/ss16viBcgbDZH4mHRhPi2OrNAAG45Q72bT4GFgsAL63+gMfsui1Yq76rSdS1AkGvj1Q89EKOdkf8WCUgiebnr/zVhGA2EfigA+Z8GgiTzB5LxeoEwxTk/V6YDw5L+XKAcBjkpeCXmC2l9mrCEDOi7nA5+S8OFf9/nJ1gmHqDu0BxhP9cKwcAMKhM0kMANkHeZ5IIADANuIsXWwus+PakP12rTrBMH6w96TZEl8OAOZn01UDoCe8V1EA1ts2q2MeBnSE5g/GfZInMAO2+HRZ/1KStWDpW+VGOgYWC8COkG7UQ7a6bOJ1MYjqVyeYyD9GAzNgIG5Q2hZQ/VcNyh0Df92gIgCnWwjmHoLtcnzM20DhEK6fIX8w2dDVUZvrJmkAdHhtUQ2AynerVQQAe9LJMkadY2DOYJgYQsB4ahfLsxYcShxWDYCcl/JUBCBwahDwIdmcQZ1jYM5gTtuquWwCxpP3coGc7I+fmXii4qR6x8BJKgKQ+Hgy8CE9JnFVemGPgTmDgV8TjftzvBwA1LzeFHJvmIoAFODcg9kqh/O2K/AYmD+Y1KfSTlQiv6O+t/pLOwZWEABPvjJYUQAA3YO7Q3s4gwEeA/MH4zfZBHz9fVH9nIcSur7etNc8wvn4ogBodYG5BzdZ8zr+AY+B+YPB9ssZShqWtgIuX1ChYB2Eos5wfbh994qFvKbHwGNg/mCKXisGZoDMPvUN3zYazwtDCACmKYFHS46hHtL8TLo6x8D8wdR9uQaYAas/q5MGwBafTtUA4D8DEQIA1jgg+O5QdY6B+YPp9O0CDk7h/xZLA6B4funyD2uUEn9LKCEAYI0DHK9yVucYmD+YfRn7kYXZjyVJA8CQEgIA45JuqcsRm21SEisHQOmbZZSaErQvc7/dBAdKYuUAqP9qDWWnBO0x76UMVhEABWsGDaktPp2UwSoCoGDNoCFV/1UDZbByACTNSsHWupDOp+L5pZTBygHgdZMPpaYcJT+RQhmsHABRD0VTaspR4J3BlMHKAZA5N4tSU44cr3SmDFYOgMp3qyk1dVEIOaqyrtsDox6KQUna1QUtAVi7tImyU4K6/LdJKYEGd3hwn+RpcAC2mrZRdkpQ47dr9XgLLEmxhTsegBFosRfpfCp7u0JCfsRMjztafAwY9vIPa4wMQJl6zmFGFX8lsPzbFKdnbn5bjQyA/20BlJqS3BDuCZOTItieSG1u7TaX2hkWgLgZCZSacuR8taucFIG3heS/VKQuALl/y6fUlKDyBZXSUiT03rDDBd8hnbzm5RsWgJqPVlB2StD2oB0yswRrZbd2aZNhAWi2b6HslKB1VutlZkkhzuaMaVfisGEB6AnbSdkpQRXvVMnMkqA7g4HBHy8/4fpbdwMC4HK1K3aySDqf0udkyMwSv8mmAzmHgPHzN1lTEQDnia7A267qBHMg56BSg8MU9kCE5ETBTm6rFi0zIABBd4XgCl14j0uAZ/j8fqDwmgK3az0kJ0rePOT+Xof3FgMCkIQzYW74plGdDdkWh41KbRCv+qyO06HakiPOKcgjzibr9VaX2BgNAKDrZembZbwOhF/Uo4KpXbySf3CA8fAbYlog9+s9sZZeAVODjAYA+zKhRiflyVR1ilIh9oPAeDbYNWuSK9jm3tkv5BoNgDa3dtTosOUE567Fd4VHYFdvZ6fy76IA46l+f7kmuZL1fA4QAP5ZrnIADMQOKnLZD3sxn7MJDzyezOeyNckVn1v8gE/RHzNgKABC7ws/VnZckT1QbBMKNv1VKp7IadGa5Ar7Ku1O3QPbXM4+6DTRxTgAALuf8++BAs1J2byOf78Ca5bqcYOXVukCbDXCFPtIvHEACMd1YuSfHQKXa7sShpRaPrIVsNXFmm0gYtuE8bfbUQiAtGcz1NkDBTZo6vAG+G8C4+mN6tcwXbCdUje5bzYOAGVvVyiyB2p+Og3Yz7mB++45Np4Wx1YN04XNBtlPIupZVn9ev/Ria4MAwOYtiuyBYpvU89ddYuOp+WiFthlTD+1x5n9bgEEAAHZQ49wDBU7GmLK49xyx8eS8pPH5Ebb9T8bcLIMAsDsFtkFmdwVX15NlH9QA31DM9DjOkcHGE/1wrLYZs+IfK4GPU/dFvREAyPhr5smqU4pMgYAH0kx+k03qHJAzed/kq/nCsS96APU4OyP6jAAA9oywYmGl23WWl/vuNY8Ag7H/lSPn4ADj2eLTZf1LW80BWPnpatQTDSUOO1zppHsA2O8y3dKSoIG4QRXKB5JmpQAfKuqhGN0DgC2TIp33WJq7MTpqyxs44+U/9tEegOpFyyg7Jah28SpFLlIB3Q9andt0DwC2Upx0XkuplwsUAaDm41pgdbf8C25gALYH7qDslKC4P8crAkD8TGR9q88tfvoGYH/2AcpOCVKnw0revHxgL9C0Z9N1DIDDr50oNSWoL6rf5jKFfJWBP/srP12tYwBMUwIpOyVoKEkhR8HTOx/vL0c92o6QHh0DED+TLNFlqN2jQykAYqbHAX0u7CY46BWA3HlkiS5Dqz+rUwoA8zPpx8tPoJ4u4sFIvQKwnCzRpQjizoJVp99W1NMVvV6iVwCAdkCkCxnKPpakGgAVC2FNVJvtW/QKQM3H9AsgQ6YpgaoBEDkNZnhaPL9UrwBUvVdN2Sla+zL3a7VMvIDiZiQcLYE1UfW80VuXAGA9P0g/qz3mvapl/xlt9oQ1UU150qxLAML/EEkJKlpbfDrVBAD4+VvxSa0uAfC+2Xdv2gjlqFDVf9WgJgBh98OaqG4L2K7XWqCS+aWUo0Kl1RpxNIZoKN/fTt8u28vtdQmA1SU25QsqKU3FKfmJFDUBOH3p2RXWRDX0vnAdu0Nn/DWL/YodyD5I+QpX4J3BygIAbIxS8GqhjgE4I7srHOJnJuS/XLB2ybou/619Uf37MvazX0mUd/T4FKdXklABe8M12WzQPQCk8SbT7YEHczFNVLNfyCEASPpTi+NGdboxEAAk2UqZndrm1g5R8D2hBACJRACQSAQAiUQAkEgEAIlEAJBIBACJRACQSAQAiUQAkEgEAIlEAJBIBACJRACQSAQAiUQAkEgX0v8BvqnjzosLMB0AAAAASUVORK5CYII=
// @grant		none
// ==/UserScript==

(function() {
	'use strict';
	function showNotification(message, bgColor, timeout) {
		const notice = document.createElement('div');
		Object.assign(notice.style, {
			position: 'fixed',
			bottom: '20px',
			right: '20px',
			backgroundColor: bgColor,
			color: 'white',
			padding: '12px 24px',
			borderRadius: '8px',
			boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
			zIndex: '2147483647',
			fontSize: '14px',
			fontWeight: '500',
			transition: 'opacity 0.3s ease',
			opacity: '0',
			pointerEvents: 'none'
		});
		notice.textContent = message;
		document.body.appendChild(notice);
		requestAnimationFrame(() => notice.style.opacity = '1');
		setTimeout(() => {
			notice.style.opacity = '0';
			setTimeout(() => notice.remove(), 300);
		}, timeout);
	}

	// aesUtil 会识别到解密结果头部为 JSON 格式并进行解析。由于加密时在 addParam 末尾加入了时间戳，会导致解析失败
	// 这里给出一份直接保留原文的方法以便调试
	// aesUtil 的密钥是全局变量 avy
	function AESdecryptFixed(e) {
		return CryptoJS.enc.Utf8.stringify(
			CryptoJS.AES.decrypt(
				e,
				CryptoJS.enc.Utf8.parse(avy),
				{
					mode: CryptoJS.mode.ECB,
					padding: CryptoJS.pad.Pkcs7
				}
			)
		).toString();
	}


	function post(param) {
		return BH_UTILS.doAjax(
			"https://DO_NOT_EDIT_ME/xsxkapp/sys/xsxkapp/elective/volunteer.do",
			{
				"addParam": aesUtil.encrypt(param),
				"studentCode": DO_NOT_EDIT_ME
			},
			"post",
			{},
			{
				"token": sessionStorage.token,
				language: 'zh_cn'
			}
		)
	}

	// call buildAddParamArray("a.cv-choice.sc-add")
	function buildAddParamArray(selector) {
		const results = [];
		const $elements = $(selector);

		if ($elements.length === 0) {
			return results;
		}

		$elements.each(function() {
			const singleElement = $(this);
			const resultString = CVCourseEvents.buildAddParam(singleElement, '1');
			results.push(resultString);
		});

		return results;
	}

	function formatAddParamArray(dataArray) {
		const formattedStrings = [];
		dataArray.forEach(item => {
			if (item.addParam) {
				formattedStrings.push(item.addParam);
			}
		});
		return formattedStrings;
	}


	// 对应网页源码的 CVCourseEvents.buildAddParam($this, '1')
	// 加密部分在 post 函数中进行，此处仍是明文

	let opts = [
 	//	"{\"data\":{\"operationType\":\"1\",\"studentCode\":\"?????????\",\"electiveBatchCode\":\"0123456789abcdef0123456789abcdef\",\"teachingClassId\":\"???????????????????\",\"courseKind\":\"?\",\"teachingClassType\":\"????\"}}",
 	//	"{\"data\":{\"operationType\":\"1\",\"studentCode\":\"?????????\",\"electiveBatchCode\":\"0123456789abcdef0123456789abcdef\",\"teachingClassId\":\"???????????????????\",\"courseKind\":\"?\",\"teachingClassType\":\"????\"}}",
	];


	$(document).ready(function() {
		if (opts.length > 0) {
			// 如果 opts 数组非空，执行原有逻辑
			for (let i = 0; i < 86400; i++) {
				setTimeout(() => {
					post(opts[i % opts.length])
						.then(response => {
							if (response.code == 302) {
								sessionStorage.removeItem('token');
								location.reload();
								return;
							} else if (response.code == 1) {
								showNotification('🎉 选课成功！', '#4CAF50', 100000000);
							} else if (response.code != 0) {
								console.log('Unexpected code: ' + response.code);
								showNotification(('Unexpected code: ' + response.code), "#DD2323", 5000);
							}
						});
				}, 1200 * i);
			}
			console.log("[Registration script loaded]");
			showNotification("Registration script loaded 🚀", '#9A269B', 3000);
		} else {
			// 如果 opts 数组为空，显示一个按钮
			const generateButton = document.createElement('button');
			Object.assign(generateButton.style, {
				position: 'fixed',
				bottom: '20px',
				right: '20px',
				backgroundColor: '#007bff',
				color: 'white',
				padding: '12px 24px',
				borderRadius: '8px',
				boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
				zIndex: '2147483647',
				fontSize: '14px',
				fontWeight: '500',
				border: 'none',
				cursor: 'pointer'
			});
			generateButton.textContent = '生成课程参数';
			document.body.appendChild(generateButton);

			generateButton.onclick = function() {
				if ($("li.cv-active > a")[0].innerText != "收藏" && $("li.cv-active > a")[0].innerText != "Favorite") {
					showNotification('请先收藏你要选择的课程，再在“收藏”页面生成', '#DD2323', 3000);
					return;
				}
				const generatedParams = buildAddParamArray("a.cv-choice.sc-add");
				const formattedParams = formatAddParamArray(generatedParams);

				console.log("formattedParams:");
				console.log(formattedParams);

				const textarea = document.createElement('textarea');
				Object.assign(textarea.style, {
					position: 'fixed',
					bottom: '70px',
					right: '20px',
					width: '400px',
					height: '200px',
					padding: '12px',
					borderRadius: '8px',
					boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
					zIndex: '2147483647',
					fontSize: '14px',
					border: '1px solid #ccc'
				});
				textarea.value = JSON.stringify(formattedParams, null, 2);
				document.body.appendChild(textarea);
				textarea.select();
				document.execCommand('copy');
				showNotification('已生成并复制课程参数到剪贴板！请修改代码中 106 行 opts 的定义', '#28a745', 3000);
			};
			console.log("[Registration script loaded, waiting for course parameters]");
		}
	});
})();
