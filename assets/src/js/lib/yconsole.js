(function(){var e=document.createElement("style");e.appendChild(document.createTextNode('\n.YConsole_left_pan{position:fixed;\ntransition:margin 0.5s ease;z-index:1000000000;}\n.YConsole_left_pan_switch{position:fixed;width:18px;height:18px;text-align:left;color:#FFF;font-family:Arial;font-size:18px;\ntext-shadow:-2px 0px 2px #FF0000,-1px 0px 2px #C04080,0px 0px 2px #8080FF,\n1px 0px 2px #40C0FF,2px 0px 2px #00FFFF;cursor:pointer;z-index:1000000001;}\n.YConsole_left_pan_resize{position:fixed;text-align:center;color:#FFF;background-color:#000;}\n.YConsole_left_pan__dock_left{left:0px;top:0px;}\n.YConsole_left_pan__dock_right{right:0px;top:0px;}\n.YConsole_left_pan__dock_top{left:0px;top:0px;}\n.YConsole_left_pan__dock_bottom{right:0px;bottom:0px;}\n.YConsole_left_pan_switch__dock_left{left:0px;top:0px;}\n.YConsole_left_pan_switch__dock_right{right:0px;top:0px;}\n.YConsole_left_pan_switch__dock_top{left:0px;top:5px;}\n.YConsole_left_pan_switch__dock_bottom{left:0px;bottom:5px;}\n.YConsole_left_pan_resize__dock_left{cursor:ew-resize;}\n.YConsole_left_pan_resize__dock_right{cursor:ew-resize;}\n.YConsole_left_pan_resize__dock_top{cursor:ns-resize;}\n.YConsole_left_pan_resize__dock_bottom{cursor:ns-resize;}\n.YConsole_konsol_selector{display:inline-block;}\n.YConsole_konsol_selector_value{display:inline-block;cursor:pointer;background-color:#444;margin:0px 3px;padding:1px 3px;border-radius:10px;}\n.YConsole_konsol_selector_value:hover{background-color:#666;}\n.YConsole_konsol_selector_childs{display:block;position:absolute;border:solid 1px #000;background-color:#eee;box-shadow:3px 2px 5px #888;}\n.YConsole_konsol_selector_option{display:block;color:#000;background-color:#fff;padding:0px 2px;margin:2px 2px;cursor:pointer;}\n.YConsole_konsol_selector_option:hover{color:#fff;background-color:#000;}\n.YConsole_konsol_help{position:absolute;left:0px;top:0px;background-color:#FFF;width:100%;overflow:auto;font-family:Arial, Helvetica, sans-serif;font-size:16px;}\n.YConsole_konsol_help div{margin:3px;padding:3px;}\n.YConsole_konsol_help div div{margin:0px 8px;padding:6px 8px;border:solid 1px #CCC;}\n.YConsole_konsol_help div div div{padding:3px 8px;border:none;background-color:#eee;}\n.YConsole_konsol_help_exit{position:absolute;right:20px;top:10px;padding:0px 6px;font-family:"Arial Black", Gadget, sans-serif;font-size:24px;color:#FFF;background-color:rgba(0,0,255,0.5);border-radius:4px;cursor:pointer;}\n.YConsole_konsol{border:solid 1px #000;font-family:Arial;}\n.YConsole_konsol_tools{color:#fff;background-color:#666;padding-bottom:1px;}\n.YConsole_konsol_tools img {vertical-align: middle;}\n.YConsole_konsol_tools a{display:inline-block;text-align:center;width:20px;background-color:#777;cursor:pointer;}\n.YConsole_konsol_help .YConsole_konsol_tools a{padding:0px 3px;}\n.YConsole_konsol_tools a:hover{background-color:transparent;}\n.YConsole_konsol_tools span span{cursor:pointer;}\n.YConsole_konsol_list{background-color:#AAA;\noverflow:auto;\n}\n.YConsole_konsol_split{background-color:#444;cursor:ns-resize;}\n.YConsole_konsol_counter{display:inline-block;padding:0px 5px;color:#FFF;background-color:#063;border-radius:10px;margin-left:5px;}\n.YConsole_konsol_line{font-family:monospace;font-size:14px;border-bottom:solid 1px #000;}\n.YConsole_konsol_showstack{}\n.YConsole_konsol_msg{background-color:#fff;}\n.YConsole_konsol_msg_u_undefined{}\n.YConsole_konsol_msg_u_number{color:#F00;}\n.YConsole_konsol_msg_u_string{color:#B97800;}\n.YConsole_konsol_msg_u_object{color:#00C;cursor:pointer;}\n.YConsole_konsol_msg_u_array{color:#060;cursor:pointer;}\n.YConsole_konsol_error{background-color:#fee;}\n.YConsole_konsol_stack{background-color:#ddd;}\n.YConsole_konsol_objedit{background-color:#aaa;font-family:monospace;font-size:12px;height:100px;overflow-y:auto;}\n.YConsole_konsol_oe_line{background-color:#fff;border-bottom:solid 1px #999;}\n.YConsole_konsol_oe_label,.YConsole_konsol_oe_type,.YConsole_konsol_oe_val{display:inline-block;}\n.YConsole_konsol_oe_toggler{cursor:pointer;}\n.YConsole_konsol_oe_hide{cursor:pointer;position:absolute;margin-top:3px;right:20px;color:#FFF;background-color:#900;padding:0px 3px;border-radius:20px;border:solid 1px #000000;}\n.YConsole_konsol_oe_hide:hover{background-color:#F00;}\n.YConsole_konsol_oe_label{padding:0px 3px;}\n.YConsole_konsol_oe_type{padding:0px 3px;background-color:#ddd;}\n.YConsole_konsol_oe_val{}\n.YConsole_konsol_oe_childs{margin-left:12px;}\n\n'));
document.documentElement.appendChild(e)})();
var YConsole=new function(){var e={star:"data:image/png;base64,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",autoscroll_off:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACF0lEQVRoge2Z3U3DMBRGTxDvdAPYoN0ANmg3aJmgbJAR2g1gA7oBMAFlAmACygSXBztSEsX2deKkLcqR/FDFP9+n+N5eOzAy0ons2AKAKTCJ6P/Wl5C2vAAS0SpcDCazJ87ewOWxBTSwBw6l3zPiYmRw6jFwG3he4ey3UNCAwHXspAJXAlftJMXhNSAwB/YCeeS8T8CrmBx/HASWAlJqS+W4vDTmR2GiUwy4RDzWxKvENJjWmE9nwO7dZ4eIwkRjTAhM7XPXWNc2TJqFboA7j8cJsKsHqP29w5+vV30EdsVABh/AQ2DMDBOkZXYY8y4OwCKD30h97RBYe7ZC0Ta2b1O81Nvcs1z6II4QpumzDizVjwFr4kUh0GtQsUzSIK6zwBRXbdhncN9yrBqvARt0C6rVoYYv/NksGcFaKINvjBitiUEzjqoaVabXgpXtPwgx5fQscb/hEHeN42rLiOl7zUKImfApQhDAVgYqpUPngSmmTIhlgjkP9H6ocRpQFmg+BjHRaMAu+kq4QFsF5p8B2xa6uqGscZa2rybAc89yaWshgU2sIOUYV2ZKZ0Dgtm2BJuHC78cRD8nfQO4R8e4KSjHH0U+PeNeZIK0BK6ZpX3+GMoo0n4tDlwHpDTSI0VyPFOPmmjfWu4GSiXfP63eNy8Xcbmj+A/ozMBCdDPz/y91T5xQ/cNTPEyf9cQPGj3xnztkbGBnpyB/uxFoC7GayWgAAAABJRU5ErkJggg==",
autoscroll_on:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABx0lEQVRoge2ZzW3CMBiGn1AGYIOyAWxQRmCEHFCdW9MN6Ab0llY9wASFCaAbpBuUDcICuIfQKimJEydODZIfiYMj5/v8Br/+BYejFZ5W7YgRsKiIuESw0og6AgYa9T+yhb7Gi9BjgGRSUWunFTP9IFUxs+Q+ek8z2cVx9QL0utD/EANJpjxG4ZFLFBCSN+oWhUeuvgs5AbZxAmzjBNjGCbCNE2AbJ8A2ToBtnADbXL2A/JbyjVuODEtrHxlXniRJhrxyp4iREPCp0UYl53tiyZqyTXSdYzAPH4mvqDEFcwLyXWjGviJ5WxYEbEwGPPdAmkB9fNiMGMGj6aDFJk4TxQbzJF39s+Wj0A1T8gdMzZHMTRo3S7kAc35YE/BsIE4h6nkgYINk2Ti65As6HRRqTGQeIU390MNHcGj0bu0UVQgOp66k64c59/nLiC6ot5RIDRjWjirZIXhq2CYt6q+FBKuafkjod9vvs+gt5jzCkzHLkfjM2LdokxZ69wOCAxFTyk1tYqkw/lNWXgDq3VL+EPGAd7bciIFJg1FHeYFRgIFLvnRiWueeye6HzCLabGj8Xz9Iwq6WCt0SMeKF95ZRtoDU+DkcJvkGLx1nlqQPTNMAAAAASUVORK5CYII=",
hang_b:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABvklEQVRoge2a0W2DMBRF76v6n26AN2g3gA3aDcIGZAPSCZpOwAgdoTBBkwnSThBvcPsRO0orAiYxGCSOxFcsv3uwE/lZAWbCIj4nI7kA8NQy7FtEfnzWvRmSC5If7EYcOvcJkm8dw5Pk3kftex+TwGyb7XaL1WrVODBNU6RpCgDKR2FfAgAArTWqqmockySJz5K48zpbAGaB0MwCoZkFQjMLhGYWCM0sEJpOp1GSEeqPwQ/XFL/Q1GgR2bnO4SRggm8AvLhO7Eh5oR4ArEXktW0C1y20hv/wrTXNi2vEqamneSVtHZfWGrtd8+pHUQSl1MXPzzo2AEhEpLlDcoHkp21ki6IggF6e5XJ53jMfzC3H7Zhbh68+JWrCP3oJP4RE7+H7lBgsfB8Sg4f3KZFlWZjwPiSKoggb/haJ0YS3dJEYXXiLi8Row1uaJEYf3lInMZnwlv8Sg4Q3RTOS+5rCY+PA4+HyGTDHaZI5jmf+KaEBKCtwAPBQliXKsgyaqg2l1J9+AQBg1ybPc+/HZN9PHMfn2yme/K3E5AXsd4Chg1xJYldgEzTGdWxFpDrdSpjf1ba/CYwFLSLvoUPMAMAvN/j4en9jhuMAAAAASUVORK5CYII=",
hang_l:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACHUlEQVRoge2a4XWCMBSF7+vpf92gbKAbECdoN2icRDuBI6AbtBOUTlDcwA2ECW5/lLQR0ZaQGNrjdw7nxCi8ewmEvIfAf4LkHckVyT2/2ZN8JXkfW9+P1EJPsSc5iq2xiZgGyQmAAgDW6zV2ux0AIEkSaK3Nz5SIvF1W4i8hmZpTnaYpARAA0zS1RyGNrbPJTWwBfbkaiM3VwDnqiSGrp+dFiBi3IQ4KACQfAaytLkUy9z0NBxkBW3xZlvZXyncs7waa4pVSvkMc4NVAm/jtduszxBHeDMQQD3gyEEs84MFATPFAz2nUQbwmqXqE3AF4FpEX0+FswBZfFAWUUqiq6qfdknrrgyY5FpEKcDTQVXye5y5hjrCm5AcAG8DBgMuZn81mXcOcim2aiWl0vYk1ul82QXExMBjxgMM0OiTxgKOBoYgHHAxorZFlWQgtTnQ1UALDMuFyExfAcEx0fQ6U+ExKcgBTU/Caz+dnd1osgmSTh3QpbJEckXw3nVmWff2+bQvAo9HttBqt1yEKcS6npYhszAfn5bSjiaX058k+YK98IPJIAPCQ0MQ24SWljGnCW1Ify4TXypyIVHXKmMN6ToTEe2GrbSQsyuM9+hGktGiZyK3uHIe1Ui8EK+7WJmbm6R3q3VowA4bQLwWvLzhi8+cNtN4D0+m0tT1oSE5+sQ6fxNZ5Fn7+0eMUq9j62pBmR32Wx43uUkQuVzPvwAehEB/H/VSXFgAAAABJRU5ErkJggg==",
hang_r:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACH0lEQVRoge2a4XGbMBiG36/X/7BBukG8QekG3qBmgrAB3qDeQGSDbmB5guAJQifIZYK3P4oc2QVsYj4J3/m58x1IWLzPWUgCLJgxJB8AfHP7IrKLl2YEJJ/Yz5ZkEjvjICTfBgRI8skd+zVm0AFSAKiqClVVHQqttUf1wHwFAABN02C3G+72XwJlUeMuEJu7QBckf3lD3pvmuK31Cyy97RSA1ZKYXIDkd7TTf13XrngBJQnVa6AoCn8iUpFQv4jzPFeVCDIKaUoEG0a1JILOAxoSRwIkH0i+nFnKDgLAhpQ4CJB8BFC3jaoypYS/nF6iXWev1+sr4n3QNE1vXZ7nAIDVagV8SGQi8v6pk5EsvW4Q7GOM8XvgC8nE7ZRleXSsR+lyR1/MdXWnMd+PLgB0SlzMLASA/yQuZjYCSZJgsRg/AM5CIEkSWGtvU6AjfD10/ClRBXrCZ2Pa6HwutN1ur0vWUhQF9vt9Z11feBF5/zcVXYYvYN1GlmVjs3aSpmln+VD4sec4CIjIjmQGYD066TEpzozlVVVNEh446ULt4+sfn2nI0d4T2756YwyWy8M9/1XhgcAXsTHGLd6ACcIDAQU0wgOBBLTCAwEENMMDyu8HNpvNZKNNHxq/QOM2tMMDCgIi8gfAyiv6DaXwgFIXEpFnAM8abZ8SfTV6LXeB2Ny8wKzfE0+1rA8Oydczj2B/xs44CMlH9v9fojzfwg3xF3sE6sa4oOH/AAAAAElFTkSuQmCC",
hang_t:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABq0lEQVRoge2Y3XGjMBRGjzJ+j1PBuoPQgVwCHdBCOqAE3AGt2BXEqSBKBVYH3z6E3WVsY+SsjGBGZ0YPDEI+H3++F8hk/gsDIOkXsAVKYJ1SKAAPHIG9MeZgJD0DjvmLn+OBzQoo6OSPxyPe+6RWY6zXa4qigG/nAklWHdZaAbMe1v7VlST79KATNRmLD7Dqb+x2u0U8A30W/xbq/w/siBdi040+rhsx8MCbMeYr0nr/kPQq6aRLTpJeo/9gTM7lq6pSVVXLCHFNnu7dPfsQt+SZe4gQeeYa4h55hkPYxcgPhJCkKql80zR3F2VN06QJcS7ftu2PK8u2bacNEVN+8hCPkJ8sxCPlJwkh6fOR8gMhTiFuq/EpQFdZeu9xzlHX9dVJ+/2ew+FwcyFrLdvt9uo+5xze+z81f7zyvn8FblHX9ehZrus6ZClJ+gxxC20pS75r8KnwwFvIxKBbyBjzAbwM7ZekMK+Ldc1Pjuuz+KY+B0hNDpCaHCA1OUBqcoDU5ACpWXyA0I5sDAdsyrIcnTjUjSVF0kVHHqvjmgRJz5Le75B/V+oPu5lI/Abu4o4uBR5Y5AAAAABJRU5ErkJggg==",
save:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABb0lEQVRoge2Y7W2DMBiE76r+TzYoG5QNmkzQjsAIjEAnaLpBV+gEpRvQDRihmeDtjziSRUuwXxtMVD8SAgs43wl/YSCTyfyJiDSyHtoxn7cOWT7NuQSwscqx2QK4j6Ym5gtY5coux0ZEdpovcONRRxHscgYmm5CVvpjViRKXPvBgF0SkINnPY8cfnyZ0pohtIgRNgFWRA6QmB0iNJsA2uosANAHK6C4C+JdNaFW4LCWGVCKyi20Eyr6lCXBnjlVw9U0oB0hNDpCaHCA1Vx9AM5EN2QPoML7I60h++wj67D/FCACczH+M3NsDaCPV84tYAbwY7LTVJDut1qUAvVbUAXuvKegHabQTk3wD8B4ivgRTo1AF4LiADzUXA5jR42khLyom5wGSLYDX+a3ocJrISNYAvmb2osJnGK1wGs83Eep9tq77ECHnACQ7EWkAvIRUaLSaUI0zXhMZyYP5oX/0eU9ESgAHx8drH+1MJpNJyw/ZpvErBKV1UgAAAABJRU5ErkJggg==",
help:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAC7ElEQVRogdVa0ZXaMBCcvZd/0gF0AB1AKoAOoAPogOvg6ABSAXSAUwFcBZAKcCqYfEgOts9Ia1k2ZN67r5N2ZyRrtdoF+M8hsQyR7AEYARjYv0dIAKQi8hnLdzBI9kguSR5ZHxeSW5LjZxAfktwHkHaJmXdBvEfyIyLxMk5sa0dIzkneWiSfx4eWl+oQk1wDeK+p+Wr/yhgB+K6YfwCwEJE/Nf0WQXPQXDiSXJOckhzTRCOfzT7Njh49tk8aey5H8weGLySnwYaLPoaW6CNsY5MnyWMM8q2JsAZdBzaqAOuz5/GpC7PWkGs1WhFgfU8dPm8khxojaw/51gRY/67F++JXSpP7qA59ZSQi8qM0dwxgheoQmQDYichvhYAlgI1jyEJEfj6avFWsfmElaM6LZt6RuhA79ti5PJrYV5InTRhds34St4wggKw60DRZZdvwnh3qBOyz8W+5uQuf8Y4wUIyZ0X6Ob0DhMdI2rooxWh4T4L4Dk/pcgpAoxsyUtibAXUAXq588DH8WNKF4oLQ3AroTcIZuZVc1bBYEaPLzUOwATHx5PU2I1X4+QJ4zwx7l3pBJ5fOQuvTlCwDgWw3FGuxgXlKJ5iVFE/02aBrCGW8H1A9ymgvLl/U6AcTfAQ3xOcxhjRI4MgEJOrgLaFKJWH4S4B6F0khGu0QK3AWcn0gkFGfAChCRX8/lEoQEKGajh+fwCEKaLXo+Ch1Q7yaswoak6zzFSln+LXb5TXxDu2lFLIyy/sJb6R+ux/SrIMk3R8o70IN5dITswhUmlfDhPcB2HhNn0KG7uOSCqlbUJHWgtuzOsO5L2wIurCjLlM9AhgVe63JLAcyqMtxKAXbgAq+TYqyCupo0VbfLEz+hGz1VaWc6LSKfJEcw17bvEhrQtKJiIYWJOM37ydSV3GNCV0oPENJF+bFZX0whYsh2igDe7z22kDHjdOtvNP249lbdIyT7vcSe+kb4iabj37grH+3XKhkUpM6Nm9c5/AXGQ2texQcufAAAAABJRU5ErkJggg==",
clear:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACuklEQVRogdWa63XaQBCFZ9OA0oHdAemAEpwOcCogHZAOnA4gFZAO5FQAroASRCr48mOlg5D3MfsQxPccfgCa2XtXo9mdWYl8cJhajoBGRL6IyGP/8eFVRM7GmLdaY2cDaIA10JKOE7AFlvcgvgD2GaRDYla3IN4ALxWJT3FgrjsCrIBuRvJjvNQmv7kR8TH22MRQTH57B/IDDkUisGFzb2w/MvkBXhHOhQxYiF1wPk/++tH/PuCriHzPmqELfovIz9H3x/77dOxnY8yvqDdsqjxoZiFwrRbOGMd997t+YqMCNp7BnA9TgYjgA+rx2cbIP/hGU9ilrBEd8BDx2Xps/Ss24ZQZvH3Y7YVGhCoUAr5OoVkMYa8YNCZCS34d4fL+LiiMQJGTAyK05FcKHu8nE/2DqBUxRS3yA5qxYZNgqBUxJhPdKieSB3gaGz8lGqeImIM8jHes5O821zFyCvKucNOgHTspqa6yKyn0qdeFbuyoLRCQJaKQPGAX10+5szfBLkUE/s1iMmoJELEiovUsNv29SgXyIpUFGGP+xC4yxvyV8i34NSo8A8lVExUKprGzzS3JVxLRilxC6JzJYWeM+ZYroK+wnjPNzyIXAccMB0eJxDJ2ixLsKvQidpnjXw2Wgmi7g0ulpmqNkN6+WU4daFfjFPJqm0QRnct4NRP5OUS4EwfhpV1LIFRXHGL2ShHu2oJwOtWssrGBQbcNb/BPpr8zETKsRD5FROuxDU8k/uIm1MNJIa8SgTsUdW133BlpU5F8UASwdFx7Qtupxp9JNpNrahwzXZ0DYCNgGsa6tuJERHHBURF5VR9WxOmOxLts8iMRpR3oEvJpYfMfiahHfiJE034sRdm5mELEgvIKzoXyeE8UsqROGu2wG8n5Zj0iZHhfYo8+7R6wJ/7Fp/LV3lYZoCB17DsTVfAPupJUHb0SsfMAAAAASUVORK5CYII=",
stack_off:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAA3ElEQVRoge3YsRGCQBAF0H9qH5RACZRyMZElXAnWYWQJtHAdaGgXa+DJAB4EeMMuzn8zBPwjuA9sAABRMRcAsoPjDsB/Nu0GBaTUndiIA4DTNBWx3cM5Nzo/KO2jGBbQxgLaWEAbC2hjAW0soI0FtLGAtv8rEGP8ushStqT/8m/bthORICIhhNBZyzDzA8IDCOmoB3llMDvnCuxFPbdQAWg23MgaHu/XJ/sEbmlxtqEBudeq16RFomUcYk0cYiqAQ6yJQ2xebg6sZyO5OTCdHScFngAeAK47yoh+8QKNXOs9J8UmcgAAAABJRU5ErkJggg==",stack_on:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAApElEQVRoge3YsQ3CMBQG4d+IARgmA7AJI7ECA3kHRoANnAopIQ0gi8PoPimFU72Lq5dE6uacpA3wXJOcHkOXRUDr9SW+pCTJ/vlta7/dUUpZnXfQHN0YQDOAZgDNAJoBNANoBtAMoBlAG36pH/4GNn8laq3EHC+bpml1Hv4GDKAZQDOAZgDNAJoBNANoy43sluRADfKBzUZ2YeZ42z3JkR5Cf2MGit01yFz2brsAAAAASUVORK5CYII="},
m=this;this.MAX_OBJ_ARRAY_LENGTH=this.MAX_OBJ_STR_LENGTH=20;this.MAX_LOG_STR_LENGTH=200;this.MAX_LOG_ARRAY_LENGTH=40;this.SPLITTER_WIDTH=3;var t=function(a){var c=document.createElement("div");c.appendChild(document.createTextNode(a));return c.innerHTML.split("\n").join("<br/>")},o=function(a,c){c.objedit&&c.objedit.show(a)},y=function(a){a=window.getComputedStyle(a,null);return[parseInt(a.getPropertyValue("width")),parseInt(a.getPropertyValue("height"))]},F=function(a){if(0==document.styleSheets.length){var c=
document.createElement("style");c.appendChild(document.createTextNode(""));document.body.appendChild(c)}c=document.styleSheets[document.styleSheets.length-1];c.insertRule(a+"{\n\n}",c.cssRules.length);return c.cssRules[c.cssRules.length-1]},f=function(a,c,b){a=document.createElement(a);if("object"==typeof c)for(var d in c)if("style"==d)for(var u in c.style)a.style[u]=c.style[u];else"innerHTML"==d?a.innerHTML=c.innerHTML:a[d]=c[d];if(b)for(d in b)a.appendChild(b[d]);return a},j=function(a,c){"undefined"!=
typeof MSApp?MSApp.execUnsafeLocalFunction(function(){a.appendChild(c)}):a.appendChild(c)},n=function(a,c){"undefined"!=typeof MSApp?MSApp.execUnsafeLocalFunction(function(){a.innerHTML=c}):a.innerHTML=c},B=function(a,c){var b=!1,d=[0,0];"undefined"!=typeof document.ontouchstart?(a.addEventListener("touchstart",function(a){b=!0;d=[a.changedTouches[0].pageX,a.changedTouches[0].pageY]}),window.addEventListener("touchend",function(){b=!1}),window.addEventListener("touchmove",function(a){b&&(a=[a.changedTouches[0].pageX,
a.changedTouches[0].pageY],c([a[0]-d[0],a[1]-d[1]]),d=a)})):(a.addEventListener("mousedown",function(a){b=!0;d=[a.pageX,a.pageY]}),window.addEventListener("mouseup",function(){b=!1}),window.addEventListener("mousemove",function(a){b&&(a=[a.pageX,a.pageY],c([a[0]-d[0],a[1]-d[1]]),d=a)}))},G=function(a){"complete"==document.readyState?a():window.addEventListener("load",a)},D=function(a,c,b){var d=a instanceof Array?"array":typeof a,b=b+"_msg_u_"+d;if("number"!=d){if("string"==d){var d=a+"",u=function(){},
e=c.objedit?m.MAX_LOG_STR_LENGTH:m.MAX_OBJ_STR_LENGTH;d.length>e&&(d=d.substring(0,e)+"\u2026",u=function(){o(a,c)});return f("span",{innerHTML:'"'+t(d)+'"',className:b,onmouseup:u})}if("function"==d)return f("span",{innerHTML:"function",className:b,onmouseup:function(){o(a,c)}});if("array"==d)return d=" "+a.join(" , ")+" ",e=c.objedit?m.MAX_LOG_ARRAY_LENGTH:m.MAX_OBJ_ARRAY_LENGTH,d.length>e&&(d=d.substring(0,e)+" , \u2026"),f("span",{innerHTML:"[ "+d+" ]",className:b,onmouseup:function(){o(a,c)}});
if("object"==d)return f("span",{innerHTML:"Object",className:b,onmouseup:function(){o(a,c)}})}return f("span",{innerHTML:a+"",className:b})},E=function(a,c){var b=[-1,-1],d=[-1,-1];this.force=function(){c(b)};var f=function(){if(a.parentNode){var e=y(a.parentNode);(b[0]!=e[0]||b[1]!=e[1]||b[0]!=d[0]||b[1]!=d[1])&&c(e);d=b;b=e}requestAnimationFrame(f)};requestAnimationFrame(f)},H=function(a,c){var b=!1,d=f("div",{className:"YConsole_konsol_selector_value"}),e=f("div",{className:"YConsole_konsol_selector_childs",
style:{display:"none"}});this.dom=f("div",{className:"YConsole_konsol_selector"},[d,e]);var C=function(b){b=a[b];b instanceof HTMLElement?d.appendChild(b):n(d,""+b)},h=function(b){0==d.innerHTML.length&&C(b);var h=a[b],g=f("span",{className:"YConsole_konsol_selector_option"},[]);h instanceof HTMLElement?g.appendChild(h):n(g,""+h);e.appendChild(g);g.onmouseup=function(){c(b);C(b)}},g;for(g in a)h(g);d.addEventListener("mouseup",function(){b||requestAnimationFrame(function(){b=!0;e.style.display=""})});
document.addEventListener("mouseup",function(){b&&(b=!1,e.style.display="none")})},I=function(a){var c=this,b=f("div",{className:"YConsole_konsol_oe_hide",innerHTML:"X"},[]);b.onmouseup=function(){c.hide()};c.dom=f("div",{className:"YConsole_konsol_objedit",style:{display:"none"}},[b]);c.visible=!1;var d=function(a,b){var c=this,e=!1,g=!1,j=b instanceof Array?"array":typeof b,i=f("span",{className:"YConsole_konsol_oe_toggler",innerHTML:"\u25ba"},[]),l=f("span",{className:"YConsole_konsol_oe_label",
innerHTML:a+""},[]),k=f("span",{className:"YConsole_konsol_oe_type",innerHTML:""+j+""},[]),m=f("span",{className:"YConsole_konsol_oe_val"},[D(b,c,"YConsole_konsol")]),p=f("div",{className:"YConsole_konsol_oe_childs",style:{display:"none"}},[]);this.dom=f("div",{className:"YConsole_konsol_oe_node"},[f("div",{className:"YConsole_konsol_oe_line"},[i,l,k,m]),p]);({"function":1,string:1,object:1,array:1})[j]?i.onmouseup=function(){c.toggle()}:(i.style.visibility="hidden",i.style.cursor="default");this.toggle=
function(){if(!g){if(typeof b=="function")n(p,t(b+""));else if(typeof b=="string")n(p,t(b+""));else for(var a in b)p.appendChild((new d(""+a,b[a])).dom);g=true}e=!e;n(i,e?"\u25bc":"\u25ba");p.style.display=e?"":"none"}};this.show=function(e){c.dom.style.display="";c.dom.innerHTML="";c.dom.appendChild(b);c.dom.appendChild((new d("_",e)).dom);c.visible=!0;a.forceresize()};this.hide=function(){c.dom.style.display="none";c.visible=!1;a.forceresize()}},J=function(){var a=this;this.dom=null;var c=f("span",
{className:"YConsole_konsol_help_exit",innerHTML:"X"},[]),b=function(a,b){return"<u>"+a+"</u><div>"+(b.join?b.join("<br/>"):b)+"</div>"},b=["<h2>YConsole Quick Reference</h2>"+b("<b>Misc</b>",["<span class='YConsole_left_pan_switch' style='position:relative;'><img width='24' src=\""+e.star+'"/></span> :',""+b("switcher","hide or show the console pannel.")]),"",""+b("<b>Tools Pannel</b>",["<span class='YConsole_konsol_tools'><a><img width='24' src=\""+e.autoscroll_on+"\"/></a></span> / <span class='YConsole_konsol_tools'><a><img width='24' src=\""+
e.autoscroll_off+'"/></a></span> : ',b("Toggle autoscroll","Enables / disables auto scrolling to last log."),"<span class='YConsole_konsol_tools'><a><img width='20' src=\""+e.save+'"/></a></span> : ',b("Save logs","save logs to a text file."),"<span class='YConsole_konsol_selector_value' style='color:#fff;'><img width='24' src=\""+e.hang_l+'"/></span> : ',b("Docking",["choose where the console is hanging.","availables are :"," <img width='24' src=\""+e.hang_l+'"/> : left'," <img width='24' src=\""+
e.hang_r+'"/> : right'," <img width='24' src=\""+e.hang_t+'"/> : top'," <img width='24' src=\""+e.hang_b+'"/> : bottom']),function(a,b,d){for(var c=[],e=0;e<d;e++){var f=Math.round(a+e/d*(b-a));c.push("<span style='background-color:rgb("+f+","+f+","+f+");'>&nbsp;</span>")}return"<span style='border:solid 1px #888;'>"+c.join("")+"</span>"}(155,255,8)+" : ",b("Alpha",["modify opacity to view behind the logs."]),"<span class='YConsole_konsol_tools'><a><img width='20' src=\""+e.clear+'"/></a></span> : ',
b("clear","clear the log pile.")]),"",""+b("<b>Objects explorer</b>",["You can explore objects, arrays or long strings from logs.","Clicking on it will open the Objects explorer pannel(if not visible).","<span class='YConsole_konsol_oe_hide' style='position:relative;right:auto;'>X</span> :",""+b("Exit","close the Objects explorer pannel.")]),"",""+b("<b>Credits</b>",["<b>YConsole.js</b> has been made to make js debugging easier under mobile with the lowest impact (no dependencies), exept for '<b>.YConsole_</b>' as a reserved css class name prefix and of course '<b>YConsole</b>' as a reserved js var.",
"<a href='http://www.yorgsite.fr/experiments/YConsole/doc/' target='_blank'>js documentation</a>.","<a href='http://www.yorgsite.fr' target='_blank'>www.yorgsite.fr</a>."]),""].join("<br/>");this.show=function(){a.dom.style.display="";c.style.display=""};var d=function(){a.dom.style.display="none";c.style.display="none"};a.dom=f("div",{className:"YConsole_konsol_help"},[f("div",{innerHTML:b}),c]);new E(a.dom,function(b){a.dom.style.height=b[1]+"px";a.dom.parentNode&&a.dom.parentNode!=c.parentNode&&
a.dom.parentNode.appendChild(c)});d();c.onmouseup=d},K=function(){var a=this,c,b,d,g;this.objedit=this.dom=null;var l,h=[],k=!0,v=!0,o,s,t,q,r=null,p=function(){for(var a=[],b=0,d;d=h[b];b++)a.push(d.toText());return a.join("\r\n----------------------------------------\r\n")},w=function(b,d,e){this.type=b;this.msg=d;this.trace=e;var g=f("span",{className:"YConsole_konsol_counter",innerHTML:"1"}),h=f("div",{className:"YConsole_konsol_"+b+"",innerHTML:""+d+" "},[]),b=f("div",{className:"YConsole_konsol_stack "+
c+"_stk",innerHTML:""+e});this.dom=f("div",{className:"YConsole_konsol_line"},[h,b]);if("object"==typeof d){h.innerHTML="";for(b=0;b<d.length;b++)0<b&&h.appendChild(f("span",{innerHTML:" , "})),h.appendChild(D(d[b],a,"YConsole_konsol"))}h.appendChild(g);g.style.display="none";this.toText=function(){return"["+g.innerHTML+"] "+("object"==typeof d?Array.prototype.concat.apply([],d).join(" , "):h.textContent+"").split("\n").join("\r\n")};this.cntIncr=function(){g.style.display="";n(g,1+parseInt(g.innerHTML))}},
x=function(a,b,d){if(0==h.length||h[h.length-1].type+""!=a+""||h[h.length-1].trace+""!=d+"")return!1;if("object"==typeof b||"array"==typeof b){if(typeof b!=typeof h[h.length-1].msg)return!1;for(var c in b)if(b[c]!=h[h.length-1].msg[c])return!1;for(c in h[h.length-1].msg)if(b[c]!=h[h.length-1].msg[c])return!1}else return h[h.length-1].msg+""==b+"";return!0},z=function(a,b,d){"error"==a&&(b=b.split("Error").join("<b style='color:#f00;'>Error</b>"));x(a,b,d)?h[h.length-1].cntIncr():(a=new w(a,b,d),h.push(a),
g.appendChild(a.dom),k&&a.dom.scrollIntoView())};this.forceresize=function(){r.force()};this.trace_track=function(){var a;try{eval("5=5;")}catch(b){if("string"==typeof b.stack){for(a=b.stack.split("\n");0<a.length&&-1==a.shift().indexOf("trace_track"););for(;0<a.length&&-1!=a[0].indexOf("YConsole");)a.shift();a=a.join("<br/>")}else a=""}return a};this.updateDocking=function(){var c;"left"==i?c=[b,a.objedit.dom,d,g]:"right"==i?c=[b,a.objedit.dom,d,g]:"top"==i?c=[a.objedit.dom,d,g,b]:"bottom"==i&&(c=
[b,a.objedit.dom,d,g]);a.dom.innerHTML="";for(var e in c)a.dom.appendChild(c[e])};this.clear=function(){h=[];g.innerHTML=""};this.log=function(a,b){z("msg",a,this.trace_track(1+b||0))};this.error=function(a,b){a&&a.error&&a.error.stack?z("error",a.message,a.error.stack.split("\n").join("<br/>")):z("error",a,this.trace_track(1+b||0))};c="YConsole_konsol_"+Math.round(1E8*Math.random());a.objedit=new I(a);b=f("div",{className:"YConsole_konsol_tools",innerHTML:""});d=f("div",{className:"YConsole_konsol_split",
style:{display:"none"}});g=f("div",{className:"YConsole_konsol_list",innerHTML:""});a.dom=f("div",{className:"YConsole_konsol"},[b,a.objedit.dom,d,g]);l=F("."+c+"_stk");a.dom.style.left="0px";a.dom.style.top="0px";r=new E(a.dom,function(c){var e=[b.offsetWidth,b.offsetHeight],f=[0,0],h=[0,0];a.objedit.visible?(d.style.display="",f=y(a.objedit.dom),h=y(d)):d.style.display="none";g.style.height=c[1]-e[1]-f[1]-h[1]+"px"});requestAnimationFrame(function(){j(b,f("span",{innerHTML:" &nbsp; &nbsp; console &nbsp; "}));
o=f("a",{innerHTML:"<img width='20' src=\""+e.autoscroll_on+'"/>',title:"toggle autoscroll[on]",onmouseup:function(){k=!k;n(this,k?"<img width='20' src=\""+e.autoscroll_on+'"/>':"<img width='20' src=\""+e.autoscroll_off+'"/>');this.title="toggle autoscroll["+(k?"on":"off")+"]"}});j(b,o);j(b,f("span",{innerHTML:" &nbsp"}));s=f("a",{innerHTML:"<img width='20' src=\""+e.stack_on+'"/>',title:"toggle stack trace[on]",onmouseup:function(){v=!v;n(this,v?"<img width='20' src=\""+e.stack_on+'"/>':"<img width='20' src=\""+
e.stack_off+'"/>');l.style.display=v?"":"none";this.title="toggle stack trace["+(v?"on":"off")+"]"}});j(b,s);j(b,f("span",{innerHTML:" &nbsp"}));dom_save=f("a",{innerHTML:"<img width='20' src=\""+e.save+'"/>',title:"save console",onmouseup:function(){var a=f("a",{download:"log.txt",href:URL.createObjectURL(new Blob([""+p()]))}),b=document.createEvent("MouseEvent");b.initEvent("click",!0,!0);a.dispatchEvent(b)}},[]);j(b,dom_save);B(d,function(b){a.objedit.dom.style.height=a.objedit.dom.offsetHeight+
b[1]+"px";r.force()});var c=new H({left:"<img width='20' src=\""+e.hang_l+'"/>',right:"<img width='20' src=\""+e.hang_r+'"/>',top:"<img width='20' src=\""+e.hang_t+'"/>',bottom:"<img width='20' src=\""+e.hang_b+'"/>'},function(a){m.docking=a});c.dom.title="docking";j(b,f("span",{innerHTML:" &nbsp"}));j(b,c.dom);q=f("span",{innerHTML:""});for(var c=function(b){var c=Math.round(128*b)+127;q.appendChild(f("span",{innerHTML:"&nbsp;",title:"opacity:"+b,style:{backgroundColor:"rgb("+c+","+c+","+c+")"},
onmouseup:function(){a.dom.style.opacity=b}}))},g=2;11>g;g++)c(g/10);j(b,f("span",{innerHTML:" &nbsp"}));j(b,q);c=f("a",{innerHTML:"<img width='20' src=\""+e.help+'"/>',title:"help",onmouseup:function(){A.show()}});j(b,f("span",{innerHTML:" &nbsp"}));j(b,c);t=f("a",{innerHTML:"<img width='20' src=\""+e.clear+'"/>',title:"clear console",onmouseup:function(){window.confirm("clear console ?")&&a.clear()}});j(b,f("span",{innerHTML:" &nbsp"}));j(b,t);d.style.height=m.SPLITTER_WIDTH+"px"})},k=null,A=null,
x=f("img",{src:e.star}),q=f("div",{className:"YConsole_left_pan_switch"},[x]),l=f("div",{className:"YConsole_left_pan_resize",innerHTML:""},[]),g=f("div",{className:"YConsole_left_pan"},[q,l]),L={left:{margin:"marginLeft",signs:["<img width='20' src=\""+e.hang_l+'"/>',"<img width='20' src=\""+e.hang_r+'"/>']},right:{margin:"marginRight",signs:["<img width='20' src=\""+e.hang_r+'"/>',"<img width='20' src=\""+e.hang_l+'"/>']},top:{margin:"marginTop",signs:["<img width='20' src=\""+e.hang_t+'"/>',"<img width='20' src=\""+
e.hang_b+'"/>']},bottom:{margin:"marginBottom",signs:["<img width='20' src=\""+e.hang_b+'"/>',"<img width='20' src=\""+e.hang_t+'"/>']}},r=[{node:g,defclass:"YConsole_left_pan",styles:{left:{width:"320px",height:"100vh"},right:{width:"320px",height:"100vh"},top:{width:"100vw",height:"320px"},bottom:{width:"100vw",height:"320px"}}},{node:q,defclass:"YConsole_left_pan_switch",styles:{left:{},right:{},top:{},bottom:{}}},{node:l,defclass:"YConsole_left_pan_resize",styles:{left:{left:"320px",top:"0px",
height:"100vh"},right:{right:"320px",top:"0px",height:"100vh"},top:{right:"0px",top:"320px",width:"100vw"},bottom:{right:"0px",bottom:"320px",width:"100vw"}}}],w=1,i="",s=0;q.onmouseup=function(){w=!w;var a=L[i];w?(g.style[a.margin]="0px",l.style.display=""):(g.style[a.margin]="-"+g.offsetWidth+"px",l.style.display="none")};B(l,function(a){"left"==i?(g.style.width=g.offsetWidth+a[0]+"px",l.style.left=parseInt(g.style.width)+"px"):"right"==i?(g.style.width=g.offsetWidth-a[0]+"px",l.style.right=parseInt(g.style.width)+
"px"):"top"==i?(g.style.height=g.offsetHeight+a[1]+"px",l.style.top=parseInt(g.style.height)+"px"):"bottom"==i&&(g.style.height=g.offsetHeight-a[1]+"px",l.style.bottom=parseInt(g.style.height)+"px")});Object.defineProperty(this,"SWITCHER_SIZE",{get:function(){return s},set:function(a){s=Math.max(16,a);x.width=s},enumerable:!0,configurable:!0});Object.defineProperty(this,"docking",{get:function(){return i+""},set:function(a){var c="left top right bottom width height marginLeft marginRight marginTop marginBottom".split(" ");
if(i!=a&&r[0].styles[a]){for(var b=0,d;d=r[b];b++){for(var e=0,f;f=c[e];e++)d.node.style[f]="";for(e in d.styles[a])d.node.style[e]=d.styles[a][e];d.node.className=d.defclass+" "+d.defclass+"__dock_"+a}l.style["left"==a||"right"==a?"width":"height"]=m.SPLITTER_WIDTH+"px";i=a+"";k&&k.updateDocking();console.log("set console docking to "+i)}},enumerable:!0,configurable:!0});this.activate=function(){if(!k){k=new K;r[0].styles[this.docking]||(this.docking="left");0==s&&(this.SWITCHER_SIZE=20);var a=console.log;
console.log=function(){a.apply(console,arguments);k.log(arguments);window.addEventListener("error",k.error,true)};g.appendChild(k.dom);A=new J;g.appendChild(A.dom)}};this.show=function(){this.activate();G(function(){"undefined"!=typeof MSApp?MSApp.execUnsafeLocalFunction(function(){document.body.appendChild(g)}):document.body.appendChild(g)})};this.hide=function(){k&&document.body.removeChild(g)}};