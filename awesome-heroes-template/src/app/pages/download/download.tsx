import "@rmwc/data-table/styles"
import "./download.sass"

import React from "react"
import Icon from "@mdi/react"

import { SimpleDataTable } from "@rmwc/data-table"

import { mdiMicrosoftOnedrive, mdiDownload, mdiFire } from "@mdi/js"

const Download : React.FC = () =>
{
    return(
        <React.Fragment>
            <section className="mt-download--bg">
                <div className="mt-download-list">
                    <ul>
                        <li>
                            <a href="#!" target="_blank">
                                <div className="mt-download-content mt-download--mega">
                                    <div className="icon">
                                        <Icon path={ mdiDownload } title="Mega"/>
                                    </div>
                                    <div className="mt-download-info">
                                        <p className="mt-download-title">mega</p>
                                        <p className="mt-download-size">2GB</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#!" target="_blank">
                            <div className="mt-download-content mt-download--mediafire">
                                    <div className="icon">
                                        <Icon path={ mdiFire } title="Mediafire"/>
                                    </div>
                                    <div className="mt-download-info">
                                        <p className="mt-download-title">mediafire</p>
                                        <p className="mt-download-size">2GB</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#!" target="_blank">
                                <div className="mt-download-content mt-download--oneDrive">
                                    <div className="icon">
                                        <Icon path={ mdiMicrosoftOnedrive } title="oneDrive"/>
                                    </div>
                                    <div className="mt-download-info">
                                        <p className="mt-download-title">OneDrive</p>
                                        <p className="mt-download-size">2GB</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                        <a href="#!">
                                <div className="mt-download-content mt-download--direct">
                                    <div className="icon">
                                        <Icon path={ mdiDownload } title="Direct download"/>
                                    </div>
                                    <div className="mt-download-info">
                                        <p className="mt-download-title">Direct</p>
                                        <p className="mt-download-size">2GB</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="mt-download-requirements">
                <h1>Requirements</h1>
                <div className="mt-requirements-tables">
                    <div className="mt-requirement-table">
                        <h3>Minimum system Requirements</h3>
                        <SimpleDataTable data={
                                [
                                    ["OS", "Windows XP / VISTA / 7 / 8 / 10"],
                                    ["CPU", "Pentium 4.1GHz"],
                                    ["Memory(RAM)", "512 MB"],
                                    ["DISK", "2 GB"],
                                    ["Graphics", "Graphics Minimum 32Mb"],
                                    ["Sound", "Support DirectTX 9.0"],
                                    ["Mouse", "Windows mouse compatibility"]
                                ]
                            }
                        />
                    </div>
                    <div className="mt-requirement-table">
                        <h3>Recomended system Requirements</h3>
                        <SimpleDataTable data={
                                [
                                    ["OS", "Windows 7 / 8 / 10"],
                                    ["CPU", "Intel i3"],
                                    ["Memory(RAM)", "1 GB"],
                                    ["DISK", "3 GB"],
                                    ["Graphics", "Graphics Minimum 64Mb"],
                                    ["Sound", "Support DirectTX 9.0"],
                                    ["Mouse", "Windows mouse compatibility"]
                                ]
                            }
                        />
                    </div>
                </div>
                
            </section>
        </React.Fragment>
    )
}

export { Download }